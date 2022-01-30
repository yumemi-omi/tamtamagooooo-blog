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

  // Set APP_ROOT_URL on enviroment variables
  // e.g. APP_ROOT_URL=https://example.com
  // https://nextjs.org/docs/basic-features/environment-variables
  const APP_ROOT_URL = process.env.APP_ROOT_URL

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - MyAppName`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'MyAppName',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  )
}
