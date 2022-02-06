import { forwardRef } from 'react'
import { Blog } from '@/types/microCMS/api/Blog'
import Image from 'next/image'
import { format } from 'date-fns'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { Card } from '@/components/shared/Card'

type BlogCardProps = {
  blog: Blog
}

export const BlogCard = forwardRef<HTMLDivElement, BlogCardProps>(function BlogCardWithRef(
  props,
  ref,
) {
  const { blog } = props
  const publishedAt = format(new Date(blog.publishedAt), 'yyyy/MM/dd')
  return (
    <Card ref={ref} className="min-h-full">
      {blog.thumbnail ? (
        <Image
          className="w-full h-full rounded-t-lg aspect-h-9 aspect-w-16"
          src={blog.thumbnail.url}
          alt={`${blog.title}のサムネイル`}
          width={384}
          height={216}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <div className="w-full rounded-t-lg fallback-bg aspect-h-9 aspect-w-16" />
      )}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="self-start px-2 py-1 font-bold border border-solid rounded text-sub-accent border-sub-accent min-w-max">
              {blog.category.name}
            </p>
            {blog.tags.length !== 0 && (
              <ul className="flex flex-wrap items-center justify-end gap-1 ml-10">
                {blog.tags.map((tag) => (
                  <li key={tag.id}>
                    <TagBadge badgeColor={tag.color}>{tag.name}</TagBadge>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-xl font-bold text-gray-800 line-clamp-2">{blog.title}</p>
        </div>
        <span className="text-gray-600">{publishedAt}</span>
      </div>
    </Card>
  )
})
