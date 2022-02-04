import { forwardRef } from 'react'
import { Blog } from 'types/microCMS/api/Blog'
import Image from 'next/image'
import { format } from 'date-fns'

type BlogCardProps = {
  blog: Blog
}

export const BlogCard = forwardRef<HTMLDivElement, BlogCardProps>(function Card(props, ref) {
  const { blog } = props
  const publishedAt = format(new Date(blog.publishedAt), 'yyyy/MM/dd')
  return (
    <div ref={ref} className="flex flex-col min-h-full rounded-lg shadow-xl bg-base">
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
          <p className="text-sm font-bold text-gray-600">{blog.category.name}</p>
          <p className="text-xl font-bold text-gray-800 line-clamp-2">{blog.title}</p>
        </div>
        <span className="text-gray-600">{publishedAt}</span>
      </div>
    </div>
  )
})
