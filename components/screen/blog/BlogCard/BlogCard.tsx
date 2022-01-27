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
    <div ref={ref} className="flex flex-col rounded-lg shadow-xl bg-base min-h-full">
      {blog.thumbnail ? (
        <Image
          className="rounded-t-lg w-full h-full aspect-h-9 aspect-w-16"
          src={blog.thumbnail.url}
          alt={`${blog.title}のサムネイル`}
          width={384}
          height={216}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <div className="fallback-bg rounded-t-lg w-full aspect-h-9 aspect-w-16" />
      )}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <p className="text-xl font-bold text-sub-accent line-clamp-2">{blog.title}</p>
        <span className="text-sub-accent">{publishedAt}</span>
      </div>
    </div>
  )
})
