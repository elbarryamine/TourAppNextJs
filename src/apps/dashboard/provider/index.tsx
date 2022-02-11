import React from 'react'
import { Grid, GridItem, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation, TopHeader } from '../components'
import theme from '../../../config/theme'
import { useChakraTheme } from 'config/hooks/usetheme'
import { LoadingPage } from 'components/loading'
import { gql, useQuery } from '@apollo/client'
import Router from 'next/router'
import { LinkTo } from 'utils/linkTo'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}
export function DashboardProvider({ children }: Props) {
  const { subBackground } = useChakraTheme()

  return (
    <BrowserRouter basename="/app">
      <ProtectRoutes>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Grid templateColumns="256px repeat(7, 1fr)" templateRows="69px minmax(200px,1fr)" h="100vh" w="100vw" overflowY="hidden">
          <TopHeader />
          <Navigation />
          <GridItem bg={subBackground} gridColumn="2/-1" gridRow="2/-1" overflowY="scroll">
            {children}
          </GridItem>
        </Grid>
      </ProtectRoutes>
    </BrowserRouter>
  )
}

const QUERY = gql`
  query verify {
    verifyUser
  }
`
export function ProtectRoutes({ children }: Props) {
  const { loading, data, error } = useQuery(QUERY)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (loading) {
      return
    } else if (error) {
      Router.push(LinkTo.login)
    } else if (data.verifyUser) {
      setLoaded(true)
    }
  }, [loading, data, error])
  if (!loaded) return <LoadingPage />
  return <>{children}</>
}
