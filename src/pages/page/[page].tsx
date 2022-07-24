import { GetStaticProps, GetStaticPropsContext } from 'next'
import { FC } from 'react'

import { fetchCategory } from '@/features/category/api/fetchCategory'
import { fetchPost } from '@/features/post/api/fetchPost'
import { PostListPageView } from '@/features/post/components/PostListPageView'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { Profile } from '@/features/profile/types/profile'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/tag'
import { PageMeta } from '@/shared/components/Pagination'
import { Seo } from '@/shared/components/Seo'
import { Category } from '@/shared/types/microCMS/api/category'
import { Post } from '@/shared/types/microCMS/api/post'
import array from '@/shared/utils/array'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
  pageMeta: PageMeta
  profile: Profile
}

const Home: FC<Props> = (props) => {
  return (
    <>
      <Seo path="/" title="投稿一覧" description="とりあえず書く、たまごであった" />
      <PostListPageView {...props} />
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
  const data = await fetchPost({ limit: 0 })
  const totalPageCount = Math.ceil(data.totalCount / DEFAULT_PAGINATION_META.limit)

  if (totalPageCount <= 1) {
    return { paths: [], fallback: false }
  } else {
    const paths = [...array.createNumberArray(totalPageCount)].map((num) => {
      return `/page/${num}`
    })

    return { paths, fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const page = context.params ? Number(context.params.page) : 1

  const data = await fetchPost({
    orders: '-publishedAt',
    limit: DEFAULT_PAGINATION_META.limit,
    offset: (page - 1) * DEFAULT_PAGINATION_META.limit,
  })
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()
  const profile = await fetchProfile()

  const totalPageCount = Math.ceil(data.totalCount / DEFAULT_PAGINATION_META.limit)
  const pager = [...array.createNumberArray(totalPageCount)]

  return {
    props: {
      posts: data.contents,
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
      pageMeta: {
        pager,
        currentPage: page,
        path: `/page`,
      },
      profile,
    },
  }
}

export default Home
