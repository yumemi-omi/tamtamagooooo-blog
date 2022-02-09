import { client } from '@/libs/microCmsClient'
import { fetchPostDetail } from '@/features/post/api/fetchPostDetail'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { Post } from '@/types/microCMS/api/Post'
import { GetStaticPropsContext } from 'next'
import { VFC } from 'react'
import { Content } from '@/components/screen/blog/Content'
import { format } from 'date-fns'
import { NarrowView } from '@/components/shared/NarrowView'
import { Seo } from '@/components/shared/Seo'
import Image from 'next/image'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { MicroCMSListValue } from '@/types/microCMS/Common'

type Props = {
  post: Post
  highlightedBody: string
}

const PostId: VFC<Props> = ({ post, highlightedBody }) => {
  const publishedAt = format(
    post.publishedAt ? new Date(post.publishedAt) : new Date(),
    'yyyy/MM/dd',
  )

  return (
    <>
      <Seo
        path={`/post/${post.id}`}
        ogImagePath={post.thumbnail ? post.thumbnail.url : ''}
        title={post.title}
        description={post.summary}
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

// 静的生成のためのパスを指定します
export const getStaticPaths = async (): Promise<{
  paths: string[]
  fallback: boolean
}> => {
  const data: MicroCMSListValue<Post> = await client.get({ endpoint: 'post' })

  const paths = data.contents.map((content) => `/post/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params ? (context.params.id as string) : ''
  const data = await fetchPostDetail(id)
  if (data.body) {
    const $ = cheerio.load(data.body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    $('iframe').each((_, elm) => {
      const wrapDiv = $(
        '<div class="iframe-wrapper" style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"></div>',
      )
      $(elm).wrap(wrapDiv)
      $(elm)
        .attr('width', null)
        .attr('height', null)
        .attr('style', 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;')
    })

    return {
      props: {
        post: data,
        highlightedBody: $.html(),
      },
    }
  } else {
    return {
      props: {
        post: data,
        highlightedBody: '',
      },
    }
  }
}

export default PostId
