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
import { Tag } from '@/features/tag/types/Tag'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { TagTile } from '@/features/tag/components/TagTile'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
}

const TagId: VFC<Props> = ({ posts = [], categories = [], tags = [] }) => {
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
        <VerticalLaneLayout.RightSide className="flex flex-col flex-grow gap-10 md:max-w-min lg:max-w-sm">
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
  const data: MicroCMSListValue<Tag> = await client.get({ endpoint: 'tag' })

  const paths = data.contents.map((content) => `/tag/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params ? (context.params.id as string) : ''
  const postResponse = await fetchPost({
    filters: `tags[contains]${id}`,
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

export default TagId
