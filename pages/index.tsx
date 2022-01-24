import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getBlog } from 'libs/apiClient'
import { Blog } from 'types/microCMS/api/Blog'
import Card from 'components/shared/card'
import Layout from 'components/shared/layout'
import { ReactNode, VFC } from 'react'

type HomeProps = {
  blogs: Blog[]
  children: ReactNode
}

const Home: VFC<HomeProps> = ({ blogs }) => {
  return (
    <Layout>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 xl:gap-8">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <Card blog={blog} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
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
