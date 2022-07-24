import { GetStaticProps } from 'next'
import { FC } from 'react'

import { Content } from '@/features/post/components/Content'
import { getPostByFilename } from '@/libs/markdownApi'
import markdownToHtml from '@/libs/markdownToHtml'
import { NarrowView } from '@/shared/components/NarrowView'
import { Seo } from '@/shared/components/Seo'

type Props = {
  policy: { [key: string]: string }
}

const Policy: FC<Props> = ({ policy }) => {
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
