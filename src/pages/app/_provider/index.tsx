import React from 'react'
import { Grid, GridItem, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation, TopHeader } from '../_components'
import theme from '../../../config/theme'
import { useChakraTheme } from 'config/theme/usetheme'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}
export function DashboardProvider({ children }: Props) {
  const { subBackground } = useChakraTheme()

  return (
    <BrowserRouter basename="/app">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid templateColumns="256px repeat(7, 1fr)" templateRows="69px minmax(200px,1fr)" h="100vh" w="100vw" overflow="hidden">
        <TopHeader />
        <Navigation />
        <GridItem bg={subBackground} gridColumn="2/-1" gridRow="2/-1">
          {children}
        </GridItem>
      </Grid>
    </BrowserRouter>
  )
}
