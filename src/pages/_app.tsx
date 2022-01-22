import React from 'react'
import '@fontsource/raleway'
import '../styles/global.css'
import '../styles/transition.css'
import { AppProps } from 'next/app'
import AppProvider from '../provider'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false)
  let typeOfWindow = typeof window
  React.useEffect(() => {
    if (typeOfWindow === 'undefined') return
    setLoaded(true)
  }, [typeOfWindow])
  if (!loaded) return null
  return (
    <AppProvider router={router}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
