import React from 'react'
import '@fontsource/raleway'
import '../styles/global.css'
import '../styles/transition.css'
import { AppProps } from 'next/app'
import AppProvider from '../provider'
import { Box } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false)
  let typeOfWindow = typeof window
  const theme = useChakraTheme()

  React.useEffect(() => {
    if (typeOfWindow === 'undefined') return
    setLoaded(true)
  }, [typeOfWindow])
  if (!loaded) return null

  return (
    <AppProvider router={router}>
      <Box __css={styles(theme).thumb}>
        <Component {...pageProps} />
      </Box>
    </AppProvider>
  )
}
const styles = function (theme: any) {
  return {
    thumb: {
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        bg: theme.accenttext,
      },
      '*::-webkit-scrollbar-thumb': {
        bg: theme.primary,
        border: '1px solid',
        borderColor: theme.accenttext,
        borderRadius: '300px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        bg: theme.primary,
      },
      '*::-webkit-scrollbar-thumb:horizontal': {
        border: '5px solid',
        borderColor: theme.accenttext,
      },
    },
  }
}

export default MyApp
