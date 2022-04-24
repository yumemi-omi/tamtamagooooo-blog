import { Post } from '@/types/microCMS/api/post'
import { GetStaticPropsContext } from 'next'
import { FC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/types/microCMS/api/category'
import { fetchPost } from '@/features/post/api/fetchPost'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { Tag } from '@/features/tag/types/tag'
import { fetchTag } from '@/features/tag/api/fetchTag'
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

const TagId: FC<Props> = ({ posts = [], categories = [], tags = [], pageMeta, profile }) => {
  return (
    <>
      <Seo path="/category" title="カテゴリ別" description="とりあえず書く、たまごであった" />
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
  const data = await fetchTag({ limit: 100 })

  const promiseList = data.contents.map(async (tag) => {
    const postData = await fetchPost({
      filters: `tags[contains]${tag.id}`,
      limit: 0,
    })
    const totalCount = postData.totalCount
    const totalPageCount = Math.ceil(totalCount / DEFAULT_PAGINATION_META.limit)

    return [...array.createNumberArray(totalPageCount)].map((num) => {
      return `/tag/${tag.id}/${num}`
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
    filters: `tags[contains]${id}`,
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

export default TagId
