import { GetStaticProps } from 'next'
import { VFC } from 'react'
import { Seo } from '@/components/shared/Seo'
import { NarrowView } from '@/components/shared/NarrowView'
import { getPostByFilename } from '@/libs/markdownApi'
import markdownToHtml from '@/libs/markdownToHtml'
import { Content } from '@/components/screen/blog/Content'

type Props = {
  policy: { [key: string]: string }
}

const Policy: VFC<Props> = ({ policy }) => {
  return (
    <>
      <Seo path="/policy" title="プライバシーポリシー" />
      <NarrowView>
        <Content html={policy.content} />
      </NarrowView>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const policy = getPostByFilename('policy', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = markdownToHtml(policy.content)

  return {
    props: {
      policy: {
        ...policy,
        content,
      },
    },
  }
}

export default Policy
