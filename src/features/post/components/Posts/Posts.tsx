import Link from 'next/link'
import { Post } from '@/types/microCMS/api/post'
import { PostCard } from '@/features/post/components/PostCard'
import { FC } from 'react'

type Props = {
  posts: Post[]
}

export const Posts: FC<Props> = ({ posts }) => {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 xl:gap-8">
      {posts.map((blog) => (
        <li key={blog.id} className="">
          <Link href={`/post/${blog.id}`} passHref>
            <a>
              <PostCard post={blog} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}