import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { Layout } from 'components/shared/Layout'
import { Main } from 'components/shared/Main'
import { MainHeader } from 'components/shared/MainHeader'
import { MainFooter } from 'components/shared/MainFooter'

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <MainHeader />
      <Main>
        <Component {...pageProps} />
      </Main>
      <MainFooter />
    </Layout>
  )
}
