import { client } from '@/libs/microCmsClient'
import { Post } from '@/types/microCMS/api/Post'
import { GetStaticPropsContext } from 'next'
import { VFC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { MicroCMSListValue } from '@/types/microCMS/Common'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/types/microCMS/api/Category'
import { fetchPost } from '@/features/post/api/fetchPost'
import { VerticalLaneLayout } from '@/components/shared/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/components/screen/blog/Posts'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { TagTile } from '@/features/tag/components/TagTile'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/Tag'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
}

const CategoryId: VFC<Props> = ({ posts = [], categories = [], tags = [] }) => {
  return (
    <>
      <Seo path="/category" title="カテゴリ別" description="とりあえず書く、たまごであった" />
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
          <CategoryTile categories={categories} />
          <TagTile tags={tags} />
        </VerticalLaneLayout.RightSide>
      </VerticalLaneLayout>
    </>
  )
}

export const getStaticPaths = async (): Promise<{
  paths: string[]
  fallback: boolean
}> => {
  const data: MicroCMSListValue<Category> = await client.get({ endpoint: 'category' })

  const paths = data.contents.map((content) => `/category/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params ? (context.params.id as string) : ''
  const postResponse = await fetchPost({
    filters: `category[equals]${id}`,
  })
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()

  return {
    props: {
      posts: postResponse.contents,
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
    },
  }
}

export default CategoryId
