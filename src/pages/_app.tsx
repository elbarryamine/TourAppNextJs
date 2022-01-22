import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'
import '@fontsource/raleway'
import '../styles/global.css'
import '../styles/transition.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function MyApp({ Component, pageProps, router }) {
  const [loaded, setLoaded] = React.useState<boolean>(false)
  let typeOfWindow = typeof window
  React.useEffect(() => {
    if (typeOfWindow === 'undefined') return
    setLoaded(true)
  }, [typeOfWindow])
  if (!loaded) return null
  return (
    <ChakraProvider theme={theme}>
      <SwitchTransition mode="out-in">
        <CSSTransition key={router.pathname} classNames="swap" timeout={300}>
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
    </ChakraProvider>
  )
}

export default MyApp
