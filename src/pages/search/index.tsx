import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
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
import useSWR from 'swr'
import { MicroCMSListResponse } from 'microcms-js-sdk'

type Props = {
  categories: Category[]
  tags: Tag[]
}

const Search: VFC<Props> = ({ categories = [], tags = [] }) => {
  const router = useRouter()
  const { data, error } = useSWR<MicroCMSListResponse<Post>>(
    `/api/search?q=${router.query.q}`,
    (url) => fetch(url).then((res) => res.json()),
  )
  const posts = data?.contents || []
  const loading = !error && !data

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error!</div>

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

export const getStaticProps: GetStaticProps = async () => {
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()

  return {
    props: {
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
    },
  }
}

export default Search
