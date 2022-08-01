import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Header from './layouts/Header'
import Offers from './layouts/Offers'
import Experience from './layouts/Experience'
import StartSection from './layouts/Start'
import TopDestination from './layouts/TopDestination'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function HomePage() {
  return (
    <Box>
      <PageLayoutContainer>
        <Stack spacing={24}>
          <Header />
          <Offers />
          <TopDestination />
          <Experience />
          <StartSection />
        </Stack>
      </PageLayoutContainer>
    </Box>
  )
}
