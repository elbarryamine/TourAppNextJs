import React from 'react'
import { Box, Container, Stack } from '@chakra-ui/react'
import Filters from './layouts/Filter'
import ToursDisplay from './layouts/TourDisplay'
import Header from './layouts/Header'

export default function SearchPage() {
  return (
    <Box bg="white" h="100%" w="100%">
      <Header />
      <Container maxW="1200px">
        <Stack py="50px" spacing={5}>
          <Filters />
          <ToursDisplay />
        </Stack>
      </Container>
    </Box>
  )
}
