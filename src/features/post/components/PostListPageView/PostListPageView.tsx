import { FC } from 'react'

import { CategoryTile } from '@/features/category/components/CategoryTile'
import { Posts } from '@/features/post/components/Posts'
import { ProfileTile } from '@/features/profile/components/ProfileTile'
import { Profile } from '@/features/profile/types/profile'
import { PostSearch } from '@/features/search/components/PostSearch'
import { TagTile } from '@/features/tag/components/TagTile'
import { Tag } from '@/features/tag/types/tag'
import { Pagination, PageMeta } from '@/shared/components/Pagination'
import { VerticalLaneLayout } from '@/shared/components/VerticalLaneLayout'
import { Category } from '@/shared/types/microCMS/api/category'
import { Post } from '@/shared/types/microCMS/api/post'

type Props = {
  posts: Post[]
  categories: Category[]
  tags: Tag[]
  pageMeta: PageMeta
  profile: Profile
}

export const PostListPageView: FC<Props> = ({
  posts = [],
  categories = [],
  tags = [],
  pageMeta,
  profile,
}) => {
  return (
    <>
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
