import { load } from 'cheerio'
import { format } from 'date-fns'
import hljs from 'highlight.js'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { FC } from 'react'

import { CategoryBadge } from '@/features/category/components/CategoryBadge'
import { getdDefaultThumbnailByCategory } from '@/features/category/utils'
// import { fetchPost } from '@/features/supabase/post/fetchPost'
// import { nextApiClient } from '@/libs/apiClient'
// import { useDebounce } from '@/shared/hooks/useDebounce'
import { fetchPost } from '@/features/post/api/fetchPost'
import { fetchPostDetail } from '@/features/post/api/fetchPostDetail'
import { Content } from '@/features/post/components/Content'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { Profile } from '@/features/profile/types/profile'
import { ShareButtonList } from '@/features/sns/components/ShareButtonList'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { Card } from '@/shared/components/Card'
import { NarrowView } from '@/shared/components/NarrowView'
import { Seo } from '@/shared/components/Seo'
import { VerticalLaneLayout } from '@/shared/components/VerticalLaneLayout'
import { Post } from '@/shared/types/microCMS/api/post'
import array from '@/shared/utils/array'

type Props = {
  post: Post
  highlightedBody: string
  profile: Profile
  // likePost: any[]
}

const PostId: FC<Props> = ({ post, highlightedBody, profile }) => {
  // const debounce = useDebounce(1000)
  const publishedAt = format(
    post.publishedAt ? new Date(post.publishedAt) : new Date(),
    'yyyy/MM/dd',
  )
  const updatedAt = format(post.updatedAt ? new Date(post.updatedAt) : new Date(), 'yyyy/MM/dd')
  const thumbnail = post.thumbnail?.url
    ? `${post.thumbnail.url}?fit=clip&w=600`
    : getdDefaultThumbnailByCategory(post.category.name)

  // const onGet = async () => {
  //   debounce(async () => {
  //     const response = await nextApiClient.like_by_user.$get({ query: { post_id: post.id } })
  //     console.log({ response })
  //   })
  // }
  // const onUpdate = async () => {
  //   debounce(async () => {
  //     const response = await nextApiClient.like_by_user.$post({
  //       query: { post_id: post.id, count: 1 },
  //     })
  //     console.log({ response })
  //   })
  // }

  return (
    <>
      <Seo
        path={`/post/${post.id}`}
        title={post.title}
        description={post.summary}
        ogImagePath={thumbnail}
      />
      <VerticalLaneLayout>
        <VerticalLaneLayout.LeftSide>
          <div className="sticky hidden w-full gap-4 md:block lg:block top-60">
            {/* <button onClick={onGet}>???????????????</button>
            <button onClick={onUpdate}>???????????????</button> */}

            <ShareButtonList title={post.title} />
          </div>
        </VerticalLaneLayout.LeftSide>
        <VerticalLaneLayout.Body>
          <NarrowView className="flex flex-col items-center justify-center">
            {/* TODO: ????????????????????????????????????????????? */}
            <div className="flex flex-col items-center w-full gap-4 my-10 text-sub-accent">
              {thumbnail && (
                <div className="w-screen rounded-lg blur-next-image-wrap md:w-9/12">
                  <Image
                    className="h-full rounded-lg aspect-h-9 aspect-w-16"
                    src={thumbnail}
                    alt={`${post.title}??????????????????`}
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
                <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
                <div className="text-gray-600">
                  <div>????????????{publishedAt}</div>
                  <div>??????????????????{updatedAt}</div>
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
                    alt="????????????????????????????????????"
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
                  alt="????????????????????????????????????"
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

const DEFAULT_PAGINATION_META = {
  limit: 10,
  offset: 0,
}

export const getStaticPaths = async (): Promise<{
  paths: string[]
  fallback: boolean
}> => {
  const { totalCount } = await fetchPost({ limit: 0 })
  const totalPageCount = Math.ceil(totalCount / DEFAULT_PAGINATION_META.limit)

  const paths: string[] = []
  for await (const page of array.createNumberArray(totalPageCount)) {
    const offset = (page - 1) * DEFAULT_PAGINATION_META.limit
    const { contents } = await fetchPost({ limit: DEFAULT_PAGINATION_META.limit, offset })
    contents.forEach((post) => {
      paths.push(`/post/${post.id}`)
    })
  }
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params ? (context.params.id as string) : ''
  // const response = await fetchPost(id)
  // const likePost = response.data || []

  const profile = await fetchProfile()

  const data = await fetchPostDetail(id)
  if (data.body) {
    const $ = load(data.body)

    // ?????????????????????????????????????????????
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    // ??????????????????????????????????????????
    $('img').each((_, elm) => {
      const wrapDiv = $('<div class="blur-image-wrap"></div>')
      $(elm).wrap(wrapDiv)
    })
    // iframe???????????????????????????
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

    // <h1>>?????????*??????3??????????????????????????????????????????
    $('h1').each((_, elm) => {
      if (elm && elm.children[0]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const targetTxt = elm.children[0].data as string
        if (targetTxt.match(/\*\*\*/)) {
          $(elm).replaceWith(`<hr class="divider" />`)
        }
      }
    })

    return {
      props: {
        post: data,
        highlightedBody: $.html(),
        profile,
        // likePost,
      },
    }
  } else {
    return {
      props: {
        post: data,
        highlightedBody: '',
        profile,
        // likePost,
      },
    }
  }
}

export default PostId
