import Link from 'next/link'
import { GetStaticProps } from 'next'
// import { client } from "../libs/microCmsClient";
import { getBlog } from 'libs/apiClient'

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlog()

  return {
    props: {
      blog: data.contents,
    },
  }
}
