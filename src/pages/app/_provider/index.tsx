import React from 'react'
import { Grid, GridItem, ColorModeScript, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation, TopHeader } from '../_components'
import theme from '../../../config/theme'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}
export function DashboardProvider({ children }: Props) {
  const BG = useColorModeValue('light.bg2', 'dark.bg2')
  return (
    <BrowserRouter basename="/app">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid templateColumns="256px repeat(7, 1fr)" templateRows="69px minmax(200px,1fr)" h="100vh" w="100vw" overflow="hidden">
        <TopHeader />
        <Navigation />
        <GridItem bg={BG} gridColumn="2/-1" gridRow="2/-1">
          {children}
        </GridItem>
      </Grid>
    </BrowserRouter>
  )
}
