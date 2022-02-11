import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9104412012929052"
            crossOrigin="anonymous"
          ></script>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="toritama blog" />
          <meta name="application-name" content="toritama blog" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ad6c6c"></meta>
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
