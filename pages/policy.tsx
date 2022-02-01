import Link from 'next/link'
import { GetStaticProps } from 'next'
import { VFC } from 'react'
import { Seo } from 'components/shared/Seo'
import { getPostByFilename } from 'libs/markdownApi'
import markdownToHtml from 'libs/markdownToHtml'

type Props = {
  policy: { [key: string]: string }
}

const Policy: VFC<Props> = ({ policy }) => {
  console.log({ policy })
  return (
    <>
      <Seo path="/policy" title="プライバシーポリシー" />
      <div
        className="w-full"
        dangerouslySetInnerHTML={{
          __html: policy.content,
        }}
      />
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
