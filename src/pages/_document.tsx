import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="preloader" className="preloader" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
