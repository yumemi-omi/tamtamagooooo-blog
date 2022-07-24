import { format } from 'date-fns'
import Image from 'next/image'
import { forwardRef } from 'react'

import { CategoryBadge } from '@/features/category/components/CategoryBadge'
import { getdDefaultThumbnailByCategory } from '@/features/category/utils'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { Card } from '@/shared/components/Card'
import { Post } from '@/shared/types/microCMS/api/post'

type PostCardProps = {
  post: Post
}

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>(function PostCardWithRef(
  props,
  ref,
) {
  const { post } = props
  const publishedAt = format(
    post.publishedAt ? new Date(post.publishedAt) : new Date(),
    'yyyy/MM/dd',
  )
  const updatedAt = format(post.updatedAt ? new Date(post.updatedAt) : new Date(), 'yyyy/MM/dd')
  const thumbnail = post.thumbnail?.url
    ? `${post.thumbnail.url}?fit=clip&w=600&q=60`
    : getdDefaultThumbnailByCategory(post.category.name)

  return (
    <Card ref={ref} className="min-h-full">
      {thumbnail ? (
        <Image
          className="w-full h-full rounded-t-lg aspect-h-9 aspect-w-16"
          src={thumbnail}
          alt={`${post.title}のサムネイル`}
          width={384}
          height={216}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <div className="w-full rounded-t-lg fallback-bg aspect-h-9 aspect-w-16" />
      )}
      <div className="flex flex-col justify-between flex-grow gap-1 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <CategoryBadge category={post.category} />
            {post.tags.length !== 0 && (
              <ul className="flex flex-wrap items-center justify-end gap-1 ml-10">
                {post.tags.map((tag) => (
                  <li key={tag.id}>
                    <TagBadge tag={tag} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-800 line-clamp-2">{post.title}</h2>
        </div>
        <div className="text-gray-600">
          <div>公開日：{publishedAt}</div>
          <div>最終更新日：{updatedAt}</div>
        </div>
      </div>
    </Card>
  )
})
