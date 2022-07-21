import { Box, ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { appTheme } from '../common/utils/theme'
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/fonts/proxima.otf" />
      </Head>
      <ColorModeScript initialColorMode={appTheme.config.initialColorMode} />
      <NextScript />
      <Box as="body" bg="#fafafa">
        <div id="preloader" className="preloader" />
        <Main />
      </Box>
    </Html>
  )
}
