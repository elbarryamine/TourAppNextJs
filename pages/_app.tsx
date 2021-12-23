import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'
import '@fontsource/raleway'
import '../styles/transition.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
