import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { Layout } from '@/shared/components/Layout'
import { Main } from '@/shared/components/Main'
import { MainHeader } from '@/shared/components/MainHeader'
import { MainFooter } from '@/shared/components/MainFooter'
import { FloatEggOnRice } from '@/shared/components/FloatEggOnRice'

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <MainHeader />
      <Main>
        <Component {...pageProps} />
      </Main>
      <MainFooter />
      <FloatEggOnRice />
    </Layout>
  )
}
