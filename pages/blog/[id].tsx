import { client } from 'libs/microCmsClient'
import { getBlogDetail } from 'libs/apiClient'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { Blog } from 'types/microCMS/api/Blog'
import { GetStaticPropsContext } from 'next'
import { VFC } from 'react'
import { Content } from 'components/screen/blog/Content'

type Props = {
  blog: Blog
  highlightedBody: string
}

const BlogId: VFC = ({ blog, highlightedBody }: Props) => {
  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <Content html={highlightedBody} />
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async (): Promise<{
  paths: any
  fallback: boolean
}> => {
  const data: any = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<{
  props: Props
}> => {
  const id = context.params.id as string
  const data = await getBlogDetail(id)
  if (data.body) {
    const $ = cheerio.load(data.body)

    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })
    $('iframe').each((_, elm) => {
      const wrapDiv = $(
        '<div class="hogehogehogehoge" style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"></div>',
      )
      $(elm).wrap(wrapDiv)
      $(elm)
        .attr('width', null)
        .attr('height', null)
        .attr('style', 'border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;')
    })

    return {
      props: {
        blog: data,
        highlightedBody: $.html(),
      },
    }
  } else {
    return {
      props: {
        blog: data,
        highlightedBody: '',
      },
    }
  }
}

export default BlogId
