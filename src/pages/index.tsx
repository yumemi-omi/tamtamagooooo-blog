import { GetStaticProps } from 'next'
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchPost({
    orders: '-publishedAt',
    limit: 10,
    offset: 0,
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
        currentPage: 1,
        path: `/page`,
      },
      profile,
    },
  }
}

export default Home
