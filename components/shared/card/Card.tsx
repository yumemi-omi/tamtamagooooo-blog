import { forwardRef } from 'react'
import { Blog } from 'types/microCMS/api/Blog'
import Image from 'next/image'
import { format } from 'date-fns'

type CardProps = {
  blog: Blog
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { blog } = props
  const publishedAt = format(new Date(blog.publishedAt), 'yyyy/MM/dd')
  return (
    <div ref={ref} className="flex flex-col justify-between rounded-lg shadow-xl bg-base w-96 h-96">
      {blog.thumbnail ? (
        <Image
          className="rounded-t-lg"
          src={blog.thumbnail.url}
          alt={`${blog.title}のサムネイル`}
          width={384}
          height={240}
        />
      ) : (
        <div className="rounded-t-lg h-60 w-96 fallback-bg" />
      )}
      <div className="h-auto">
        <p className="text-xl font-bold text-sub-accent line-clamp-2">{blog.title}</p>
        <span className="text-sub-accent">{publishedAt}</span>
      </div>
    </div>
  )
})

export default Card
