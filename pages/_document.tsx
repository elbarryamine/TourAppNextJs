import { Box, ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '@shared/utils/theme'
export default function Document() {
  return (
    <Html>
      <Head></Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NextScript />
      <Box as="body">
        <div id="preloader" className="preloader" />
        <Main />
      </Box>
    </Html>
  )
}
