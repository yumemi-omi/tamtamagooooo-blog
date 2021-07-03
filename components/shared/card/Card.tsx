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
    <div ref={ref}>
      {blog.thumbnail ? (
        <div>
          <Image
            src={blog.thumbnail.url}
            alt={`${blog.title}のサムネイル`}
            width={192}
            height={112}
          />
        </div>
      ) : (
        <div className="w-48 fallback-bg h-28" />
      )}
      {blog.title}
      {publishedAt}
    </div>
  )
})

export default Card
