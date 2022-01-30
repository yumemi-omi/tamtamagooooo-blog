import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getBlog } from 'libs/apiClient'
import { Blog } from 'types/microCMS/api/Blog'
import { BlogCard } from 'components/screen/blog/BlogCard'
import { ReactNode, VFC } from 'react'
import { Seo } from 'components/shared/Seo'

type HomeProps = {
  blogs: Blog[]
  children: ReactNode
}

const Home: VFC<HomeProps> = ({ blogs }) => {
  console.log({ blogs })
  return blogs.length !== 0 ? (
    <>
      <Seo path="/" />
      {/* TODO: リストコンポーネント化 */}
      <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <BlogCard blog={blog} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <>
      <Seo />
      {/* TODO: メッセージコンポーネント化 */}
      <div>投稿は、まだありません。楽しみにしててね！</div>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlog()

  return {
    props: {
      blogs: data.contents,
    },
  }
}

export default Home
