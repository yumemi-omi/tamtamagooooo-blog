import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'

import { fetchCategory } from '@/features/category/api/fetchCategory'
import { CategoryTile } from '@/features/category/components/CategoryTile'
import { Posts } from '@/features/post/components/Posts'
import { fetchProfile } from '@/features/profile/api/fetchProfile'
import { ProfileTile } from '@/features/profile/components/ProfileTile'
import { Profile } from '@/features/profile/types/profile'
import { PostSearch } from '@/features/search/components/PostSearch'
import { fetchTag } from '@/features/tag/api/fetchTag'
import { TagTile } from '@/features/tag/components/TagTile'
import { Tag } from '@/features/tag/types/tag'
import { Seo } from '@/shared/components/Seo'
import { VerticalLaneLayout } from '@/shared/components/VerticalLaneLayout'
import { Category } from '@/shared/types/microCMS/api/category'
import { Post } from '@/shared/types/microCMS/api/post'

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
