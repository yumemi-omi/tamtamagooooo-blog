import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { FloatEggOnRice } from '@/shared/components/FloatEggOnRice'
import { Layout } from '@/shared/components/Layout'
import { Main } from '@/shared/components/Main'
import { MainFooter } from '@/shared/components/MainFooter'
import { MainHeader } from '@/shared/components/MainHeader'

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
