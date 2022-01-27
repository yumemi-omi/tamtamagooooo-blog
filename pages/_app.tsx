import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { Layout } from 'components/shared/Layout'
import { MainHeader } from 'components/shared/MainHeader'

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <MainHeader />
      <Component {...pageProps} />
    </Layout>
  )
}
