import { load } from 'cheerio'
import hljs from 'highlight.js'
import { Post } from '@/shared/types/microCMS/api/post'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { FC } from 'react'
import { Content } from '@/features/post/components/Content'
import { format } from 'date-fns'
import { NarrowView } from '@/shared/components/NarrowView'
import { Seo } from '@/shared/components/Seo'
import Image from 'next/image'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { fetchPostDetail } from '@/features/post/api/fetchPostDetail'
import { getdDefaultThumbnailByCategory } from '@/features/category/utils'
import { VerticalLaneLayout } from '@/shared/components/VerticalLaneLayout'
import { ShareButtonList } from '@/features/sns/components/ShareButtonList'
import { CategoryBadge } from '@/features/category/components/CategoryBadge'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { Profile } from '@/features/profile/types/profile'
import { Card } from '@/shared/components/Card'

type Props = {
  post: Post
  highlightedBody: string
  profile: Profile
}

const PreviewPost: FC<Props> = ({ post, highlightedBody, profile }) => {
  const publishedAt = format(
    post.publishedAt ? new Date(post.publishedAt) : new Date(),
    'yyyy/MM/dd',
  )
  const updatedAt = format(post.updatedAt ? new Date(post.updatedAt) : new Date(), 'yyyy/MM/dd')
  const thumbnail = post.thumbnail?.url
    ? `${post.thumbnail.url}?fit=clip&w=600`
    : getdDefaultThumbnailByCategory(post.category.name)

  return (
    <>
      <Seo
        path={`/preview/post/${post.id}`}
        ogImagePath={thumbnail}
        title={post.title}
        description={post.summary}
        noindex
      />
      <VerticalLaneLayout>
        <VerticalLaneLayout.LeftSide>
          <div className="sticky hidden w-full gap-4 md:block lg:block top-60">
            <ShareButtonList title={post.title} />
          </div>
        </VerticalLaneLayout.LeftSide>
        <VerticalLaneLayout.Body>
          <NarrowView className="flex flex-col items-center justify-center">
            {/* TODO: ブログタイトルコンポーネント化 */}
            <div className="flex flex-col items-center w-full gap-4 my-10 text-sub-accent">
              {thumbnail && (
                <div className="w-screen rounded-lg blur-next-image-wrap md:w-9/12">
                  <Image
                    className="h-full rounded-lg aspect-h-9 aspect-w-16"
                    src={thumbnail}
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
                    <CategoryBadge category={post.category} />
                    {post.tags.length !== 0 && (
                      <ul className="flex flex-wrap items-center justify-end gap-1 ml-10">
                        {post.tags.map((tag) => (
                          <li key={tag.id}>
                            <TagBadge tag={tag} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{post.title}</p>
                <div className="text-gray-600">
                  <div>公開日：{publishedAt}</div>
                  <div>最終更新日：{updatedAt}</div>
                </div>
              </div>
            </div>
            <Content html={highlightedBody} />
            <Card className="hidden p-5 mt-16 lg:block md:block">
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <div className="flex p-2 pt-6 rounded-full w-36 h-36 bg-tia-maria-100">
                  <Image
                    className="object-cover rounded-full w-36 h-36"
                    src={profile.icon.url}
                    width={200}
                    height={200}
                    alt="たまごのプロフィール画像"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-bold text-gray-800">{profile.title}</div>
                  <Content html={profile.body} />
                  <a
                    target="_blank"
                    className="underline text-sky-400"
                    href={profile.insta}
                    rel="noreferrer"
                  >
                    Instaglam
                  </a>
                  <a
                    target="_blank"
                    className="underline text-sky-400"
                    href={profile.youtube}
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </Card>
          </NarrowView>
        </VerticalLaneLayout.Body>
        <VerticalLaneLayout.RightSide>
          <div className="w-full md:hidden lg:hidden">
            <ShareButtonList title={post.title} />
          </div>
          <Card className="p-5 mt-16 lg:hidden md:hidden">
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <div className="flex p-2 pt-6 rounded-full w-36 h-36 bg-tia-maria-100">
                <Image
                  className="object-cover rounded-full w-36 h-36"
                  src={profile.icon.url}
                  width={200}
                  height={200}
                  alt="たまごのプロフィール画像"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-lg font-bold text-gray-800">{profile.title}</div>
                <Content html={profile.body} />
                <a
                  target="_blank"
                  className="underline text-sky-400"
                  href={profile.insta}
                  rel="noreferrer"
                >
                  Instaglam
                </a>
                <a
                  target="_blank"
                  className="underline text-sky-400"
                  href={profile.youtube}
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </Card>
        </VerticalLaneLayout.RightSide>
      </VerticalLaneLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params ? (context.params.id as string) : ''
  const draftKey = context.query.draftKey as string
  const data = await fetchPostDetail(id, { draftKey })

  const profile = await fetchProfile()

  if (data.body) {
    const $ = load(data.body)

    // シンタックスハイライトのクラス
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    // 画像の縁をぼかすためのクラス
    $('img').each((_, elm) => {
      const wrapDiv = $('<div class="blur-image-wrap"></div>')
      $(elm).wrap(wrapDiv)
    })
    // iframeのレスポンシブ対応
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

    // <h1>>内に「*」が3つ以上あれば、区切り線に変換
    $('h1').each((_, elm) => {
      if (elm && !!elm.children.length && elm.children[0]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (elm.children[0].data) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const targetTxt = elm.children[0].data as string
          if (targetTxt.match(/\*\*\*/)) {
            $(elm).replaceWith(`<hr class="divider" />`)
          }
        }
      }
    })

    return {
      props: {
        post: data,
        highlightedBody: $.html(),
        profile,
      },
    }
  } else {
    return {
      props: {
        post: data,
        highlightedBody: '',
        profile,
      },
    }
  }
}

export default PreviewPost
