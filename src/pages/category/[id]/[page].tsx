import { Post } from '@/shared/types/microCMS/api/post'
import { GetStaticPropsContext } from 'next'
import { FC } from 'react'
import { Seo } from '@/shared/components/Seo'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/shared/types/microCMS/api/category'
import { fetchPost } from '@/features/post/api/fetchPost'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/tag'
import array from '@/shared/utils/array'
import { PageMeta } from '@/shared/components/Pagination'
import { Profile } from '@/features/profile/types/profile'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { PostListPageView } from '@/features/post/components/PostListPageView'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
  pageMeta: PageMeta
  profile: Profile
}

const CategoryId: FC<Props> = (props) => {
  return (
    <>
      <Seo path="/category" title="カテゴリ別" description="とりあえず書く、たまごであった" />
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
  const data = await fetchCategory({ limit: 100 })

  const promiseList = data.contents.map(async (category) => {
    const postData = await fetchPost({
      filters: `category[equals]${category.id}`,
      limit: 0,
    })
    const totalCount = postData.totalCount
    const totalPageCount = Math.ceil(totalCount / DEFAULT_PAGINATION_META.limit)

    return [...array.createNumberArray(totalPageCount)].map((num) => {
      return `/category/${category.id}/${num}`
    })
  })

  const paths = (await Promise.all(promiseList)).flat()
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params ? (context.params.id as string) : ''
  const page = context.params ? Number(context.params.page) : 1

  const postResponse = await fetchPost({
    filters: `category[equals]${id}`,
    orders: '-publishedAt',
    limit: DEFAULT_PAGINATION_META.limit,
    offset: (page - 1) * DEFAULT_PAGINATION_META.limit,
  })
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()
  const profile = await fetchProfile()

  const totalPageCount = Math.ceil(postResponse.totalCount / DEFAULT_PAGINATION_META.limit)
  const pager = [...array.createNumberArray(totalPageCount)]

  return {
    props: {
      posts: postResponse.contents,
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
      pageMeta: {
        pager,
        currentPage: page,
        path: `/category/${id}`,
      },
      profile,
    },
  }
}

export default CategoryId
