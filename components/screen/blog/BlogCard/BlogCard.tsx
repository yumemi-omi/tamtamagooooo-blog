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
    <div ref={ref} className="flex min-h-full flex-col rounded-lg bg-base shadow-xl">
      {blog.thumbnail ? (
        <Image
          className="aspect-h-9 aspect-w-16 h-full w-full rounded-t-lg"
          src={blog.thumbnail.url}
          alt={`${blog.title}のサムネイル`}
          width={384}
          height={216}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <div className="fallback-bg aspect-h-9 aspect-w-16 w-full rounded-t-lg" />
      )}
      <div className="flex flex-grow flex-col justify-between p-4">
        <p className="text-xl font-bold text-sub-accent line-clamp-2">{blog.title}</p>
        <span className="text-sub-accent">{publishedAt}</span>
      </div>
    </div>
  )
})
