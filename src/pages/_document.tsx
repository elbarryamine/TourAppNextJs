import { Box, ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { appTheme } from '../utils/theme'
export default function Document() {
  return (
    <Html>
      <Head />
      <Box
        as="body"
        bg="#fafafa"
        //  bgImage="linear-gradient(to right, #FDF7FA 0%, #F5F4FF80 100%);"
      >
        <div id="preloader" className="preloader" />
        <ColorModeScript initialColorMode={appTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </Box>
    </Html>
  )
}
