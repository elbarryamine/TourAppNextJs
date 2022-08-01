import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Filters from './layouts/Filter'
import ToursDisplay from './layouts/TourDisplay'
import Header from './layouts/Header'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function SearchPage() {
  return (
    <Box bg="white" h="100%" w="100%">
      <Header />
      <PageLayoutContainer>
        <Stack py="50px" spacing={5}>
          <Filters />
          <ToursDisplay />
        </Stack>
      </PageLayoutContainer>
    </Box>
  )
}
