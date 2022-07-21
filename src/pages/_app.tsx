import React, { useEffect, useState } from 'react'
import '@fontsource/raleway'
import '../styles/global.css'
import '../styles/transition.css'
import { AppProps } from 'next/app'
import AppProvider from '../common/provider'
import { Flex } from '@chakra-ui/react'
import { Navigation } from 'components/navigation'
import { Footer } from 'components/footer'
import { SimpleLoading } from 'components/loading'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = useState<boolean>(false)
  let typeOfWindow = typeof window
  useEffect(() => {
    if (typeOfWindow === 'undefined') return
    setLoaded(true)
  }, [typeOfWindow])
  if (!router.isReady || !loaded) return <SimpleLoading hideText={true} h="100vh" />
  return (
    <AppProvider router={router}>
      <Flex minH="100vh" flexDir="column">
        {!router.pathname.startsWith('/app') && <Navigation />}
        <Component {...pageProps} />
        {!router.pathname.startsWith('/app') && <Footer />}
      </Flex>
    </AppProvider>
  )
}
