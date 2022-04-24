import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Post } from '@/types/microCMS/api/post'
import { FC } from 'react'
import { Seo } from '@/shared/components/Seo'
import { VerticalLaneLayout } from '@/shared/components/VerticalLaneLayout'
import { PostSearch } from '@/features/search/components/PostSearch'
import { Posts } from '@/features/post/components/Posts'
import { fetchCategory } from '@/features/category/api/fetchCategory'
import { Category } from '@/types/microCMS/api/category'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { TagTile } from '@/features/tag/components/TagTile'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { Tag } from '@/features/tag/types/tag'
import useSWR from 'swr'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { Profile } from '@/features/profile/types/profile'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { ProfileTile } from '@/features/profile/components/ProfileTile'

type Props = {
  categories: Category[]
  tags: Tag[]
  profile: Profile
}

const Search: FC<Props> = ({ categories = [], tags = [], profile }) => {
  const router = useRouter()
  const { data, error } = useSWR<MicroCMSListResponse<Post>>(
    `/api/search?q=${router.query.q}`,
    (url) => fetch(url).then((res) => res.json()),
  )
  const posts = data?.contents || []
  const loading = !error && !data

  if (error) return <div>Error!</div>

  return (
    <>
      <Seo path="/search" title="検索結果" description="とりあえず書く、たまごであった" />
      <VerticalLaneLayout>
        <VerticalLaneLayout.Body>
          {loading ? (
            <div className="flex items-center gap-4">
              <div
                className="w-8 h-8 border-4 rounded-full border-tia-maria-200 border-t-tia-maria-400 animate-spin"
                role="status"
              />
              <span className="text-center">読み込み中</span>
            </div>
          ) : posts.length !== 0 ? (
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

export const getStaticProps: GetStaticProps = async () => {
  const categoryResponse = await fetchCategory()
  const tagResponse = await fetchTag()
  const profile = await fetchProfile()

  return {
    props: {
      categories: categoryResponse.contents,
      tags: tagResponse.contents,
      profile,
    },
  }
}

export default Search
