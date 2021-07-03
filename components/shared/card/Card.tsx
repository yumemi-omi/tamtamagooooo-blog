import { forwardRef } from 'react'
import { Blog } from 'types/microCMS/api/Blog'
import Image from 'next/image'

type CardProps = {
  blog: Blog
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(props, ref) {
  const { blog } = props
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
        <div className="w-48 fallback-bg h-28"></div>
      )}
      {blog.title}
    </div>
  )
})

export default Card
