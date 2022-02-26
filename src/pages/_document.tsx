import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { appTheme } from '../config/theme'
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="preloader" className="preloader" />
        <ColorModeScript initialColorMode={appTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
