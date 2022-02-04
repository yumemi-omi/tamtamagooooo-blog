import { client } from 'libs/microCmsClient'
import { getBlogDetail } from 'libs/apiClient'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { Blog } from 'types/microCMS/api/Blog'
import { GetStaticPropsContext } from 'next'
import { VFC } from 'react'
import { Content } from 'components/screen/blog/Content'
import { format } from 'date-fns'
import { NarrowView } from 'components/shared/NarrowView'
import { Seo } from 'components/shared/Seo'
import Image from 'next/image'

type Props = {
  blog: Blog
  highlightedBody: string
}

const BlogId: VFC = ({ blog, highlightedBody }: Props) => {
  const publishedAt = format(new Date(blog.publishedAt), 'yyyy/MM/dd')

  return (
    <>
      <Seo
        path={`/blog/${blog.id}`}
        ogImagePath={blog.thumbnail ? blog.thumbnail.url : ''}
        title={blog.title}
        description={blog.summary}
      />
      <NarrowView className="flex flex-col items-center justify-center">
        {/* TODO: ブログタイトルコンポーネント化 */}
        <div className="flex flex-col items-center w-9/12 gap-2 my-10 text-sub-accent">
          {blog.thumbnail && (
            <div className="w-full">
              <Image
                className="h-full rounded-lg aspect-h-9 aspect-w-16"
                src={blog.thumbnail.url}
                alt={`${blog.title}のサムネイル`}
                width={600}
                height={371}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )}
          <div className="flex flex-col items-start justify-between w-full gap-2 p-4">
            <h1 className="text-4xl font-bold ">{blog.title}</h1>
            <span className="flex-shrink px-2 py-1 border border-solid rounded border-sub-accent">
              {blog.category.name}
            </span>
            <span className="">{publishedAt}</span>
          </div>
        </div>
        <Content html={highlightedBody} />
      </NarrowView>
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
