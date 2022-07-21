import React from 'react'
import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import Filters from './components/Filter'
import ToursDisplay from './components/TourDisplay'
import Header from './components/Header'

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
