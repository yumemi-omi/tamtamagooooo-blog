import { nextApiClient } from '@/libs/apiClient'
import { Post } from '@/types/microCMS/api/Post'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { VFC } from 'react'
import { Content } from '@/components/screen/blog/Content'
import { format } from 'date-fns'
import { NarrowView } from '@/components/shared/NarrowView'
import { Seo } from '@/components/shared/Seo'
import Image from 'next/image'
import { TagBadge } from '@/features/tag/components/TagBadge'

type Props = {
  post: Post
  highlightedBody: string
}

const PreviewPost: VFC<Props> = ({ post, highlightedBody }) => {
  const publishedAt = format(
    post.publishedAt ? new Date(post.publishedAt) : new Date(),
    'yyyy/MM/dd',
  )

  return (
    <>
      <Seo
        path={`/preview/post/${post.id}`}
        ogImagePath={post.thumbnail ? post.thumbnail.url : ''}
        title={post.title}
        description={post.summary}
        noindex
      />
      <NarrowView className="flex flex-col items-center justify-center">
        {/* TODO: ブログタイトルコンポーネント化 */}
        <div className="flex flex-col items-center w-full gap-4 my-10 text-sub-accent">
          {post.thumbnail && (
            <div className="w-screen md:w-9/12">
              <Image
                className="h-full rounded-lg aspect-h-9 aspect-w-16"
                src={post.thumbnail.url}
                alt={`${post.title}のサムネイル`}
                width={600}
                height={371}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}
          <div className="flex flex-col justify-between flex-grow w-full gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="self-start px-2 py-1 font-bold border border-solid rounded text-sub-accent border-sub-accent min-w-max">
                  {post.category.name}
                </p>
                {post.tags.length !== 0 && (
                  <ul className="flex flex-wrap items-center justify-end gap-1 ml-10">
                    {post.tags.map((tag) => (
                      <li key={tag.id}>
                        <TagBadge badgeColor={tag.color}>{tag.name}</TagBadge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{post.title}</p>
            <span className="text-gray-600">{publishedAt}</span>
          </div>
        </div>
        <Content html={highlightedBody} />
      </NarrowView>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params ? (context.params.id as string) : ''
  const draftKey = context.query.draftKey as string
  const data = await nextApiClient.preview.post.$get({ query: { id, draftKey } })
  console.log({ data })
  return {
    props: {
      post: data.post,
      highlightedBody: data.highlightedBody,
    },
  }
}

export default PreviewPost
