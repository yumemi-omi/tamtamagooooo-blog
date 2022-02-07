import { GetStaticProps } from 'next'
import { fetchPost } from '@/features/post/api/fetchPost'
import { Post } from '@/types/microCMS/api/Post'
import { ReactNode, VFC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'

type Props = {
  posts: Post[]
  children: ReactNode
}

const Home: VFC<Props> = ({ posts }) => {
  return (
    <>
      <Seo path="/" title="投稿一覧" description="とりあえず書く、たまごであった" />
      <VerticalLaneLayout>
        <VerticalLaneLayout.Body>
          {posts.length !== 0 ? (
            <Posts posts={posts} />
          ) : (
            <div>
              {/* TODO: メッセージコンポーネント化 */}
              投稿は、まだありません。楽しみにしててね！
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchPost()

  return {
    props: {
      posts: data.contents,
    },
  }
}

export default Home
