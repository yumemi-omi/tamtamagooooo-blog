import NextHeadSeo from 'next-head-seo'
import { VFC } from 'react'

// types
export type SeoProps = {
  path: string
  title?: string
  description?: string
  ogImagePath?: string
  noindex?: boolean
  noTitleTemplate?: boolean
}

export const Seo: VFC<SeoProps> = (props) => {
  const {
    path,
    title = 'Default title',
    description = 'Default description',
    ogImagePath = '/default-og.png',
    noindex,
    noTitleTemplate,
  } = props

  const APP_ROOT_URL = process.env.APP_ROOT_URL
  const pageUrl = APP_ROOT_URL + path

  const ogImageUrl = ogImagePath

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - とりたま日記`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'とりたま日記',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  )
}
