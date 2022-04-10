import Link from 'next/link'
import { Post } from '@/types/microCMS/api/post'
import { BlogCard } from '@/components/screen/blog/BlogCard'
import { VFC } from 'react'

type Props = {
  posts: Post[]
}

export const Posts: VFC<Props> = ({ posts }) => {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 xl:gap-8">
      {posts.map((blog) => (
        <li key={blog.id} className="">
          <Link href={`/post/${blog.id}`} passHref>
            <a>
              <BlogCard post={blog} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
