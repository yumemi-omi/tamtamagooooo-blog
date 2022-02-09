import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { fetchPost } from '@/features/post/api/fetchPost'
import { Post } from '@/types/microCMS/api/Post'
import { VFC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/types/microCMS/api/Category'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { TagTile } from '@/features/tag/components/TagTile'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/Tag'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
}

const Search: VFC<Props> = ({ posts = [], categories = [], tags = [] }) => {
  return (
    <>
      <Seo path="/search" title="検索結果" description="とりあえず書く、たまごであった" />
      <VerticalLaneLayout>
        <VerticalLaneLayout.Body>
          {posts.length !== 0 ? (
            <Posts posts={posts} />
          ) : (
            <div>
              {/* TODO: メッセージコンポーネント化 */}
              検索結果：0件
              <br />
              違う検索ワードで検索してみてください。
            </div>
          )}
        </VerticalLaneLayout.Body>
        <VerticalLaneLayout.RightSide>
          <PostSearch />
          <CategoryTile categories={categories} />
          <TagTile tags={tags} />
        </VerticalLaneLayout.RightSide>
      </VerticalLaneLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const query = context.query.q as string
  const data = await fetchPost({
    q: query,
  })
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()

  return {
    props: {
      posts: data.contents,
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
    },
  }
}

export default Search
