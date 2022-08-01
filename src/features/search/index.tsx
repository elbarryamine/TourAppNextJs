import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Filters from './layouts/Filter'
import ToursDisplay from './layouts/TourDisplay'
import Header from './layouts/Header'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function SearchPage() {
  return (
    <Box h="100%" w="100%">
      <Header />
      <PageLayoutContainer>
        <Stack p="50px" spacing={5} bg="white" borderRadius="15px">
          <Filters />
          <ToursDisplay />
        </Stack>
      </PageLayoutContainer>
    </Box>
  )
}
