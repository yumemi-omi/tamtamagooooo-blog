import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getBlog } from '@/libs/apiClient'
import { Blog } from '@/types/microCMS/api/Blog'
import { ReactNode, VFC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'

type Props = {
  posts: Blog[]
  children: ReactNode
}

const Search: VFC<Props> = ({ posts }) => {
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
        </VerticalLaneLayout.RightSide>
      </VerticalLaneLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const query = context.query.q as string
  const data = await getBlog({
    q: query,
  })
  return {
    props: {
      posts: data.contents,
    },
  }
}

export default Search
