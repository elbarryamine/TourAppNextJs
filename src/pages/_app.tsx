import React from 'react'
import '@fontsource/raleway'
import '../styles/global.css'
import '../styles/transition.css'
import { AppProps } from 'next/app'
import AppProvider from '../provider'
import { Box } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const { primary, accenttext } = useChakraTheme()
  let typeOfWindow = typeof window
  React.useEffect(() => {
    if (typeOfWindow === 'undefined') return
    setLoaded(true)
  }, [typeOfWindow])
  if (!loaded) return null
  return (
    <AppProvider router={router}>
      <Box
        __css={{
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            bg: accenttext,
          },
          '*::-webkit-scrollbar-thumb': {
            bg: primary,
            border: '1px solid',
            borderColor: accenttext,
            borderRadius: '300px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            bg: primary,
          },
          '*::-webkit-scrollbar-thumb:horizontal': {
            borderBottom: '8px solid red',
          },
        }}>
        <Component {...pageProps} />
      </Box>
    </AppProvider>
  )
}

export default MyApp
