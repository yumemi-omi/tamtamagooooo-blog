import { GetStaticProps, GetStaticPropsContext } from 'next'
import { fetchPost } from '@/features/post/api/fetchPost'
import { Post } from '@/types/microCMS/api/post'
import { FC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/types/microCMS/api/category'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/tag'
import { TagTile } from '@/features/tag/components/TagTile'
import array from '@/utils/array'
import { Pagination, PageMeta } from '@/components/shared/Pagination'
import { Profile } from '@/features/profile/types/profile'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { ProfileTile } from '@/features/profile/components/ProfileTile'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
  pageMeta: PageMeta
  profile: Profile
}

const Home: FC<Props> = ({ posts = [], categories = [], tags = [], pageMeta, profile }) => {
  return (
    <>
      <Seo path="/" title="投稿一覧" description="とりあえず書く、たまごであった" />
      <VerticalLaneLayout>
        <VerticalLaneLayout.Body>
          {posts.length !== 0 ? (
            <div className="flex flex-col items-center justify-center">
              <Pagination pageMeta={pageMeta} />
              <div className="w-full my-8">
                <Posts posts={posts} />
              </div>
              <Pagination pageMeta={pageMeta} />
            </div>
          ) : (
            <div>
              {/* TODO: メッセージコンポーネント化 */}
              投稿は、まだありません。楽しみにしててね！
            </div>
          )}
        </VerticalLaneLayout.Body>
        <VerticalLaneLayout.RightSide className="flex flex-col flex-grow gap-10 md:max-w-min lg:max-w-sm">
          <PostSearch />
          <CategoryTile categories={categories} />
          <TagTile tags={tags} />
          <ProfileTile profile={profile} />
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
