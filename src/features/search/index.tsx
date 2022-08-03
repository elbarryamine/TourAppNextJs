import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Filters from '../../components/Layouts/Filter'
import ToursDisplay from './layouts/TourDisplay'
import Header from '../../components/Layouts/Header'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function SearchPage() {
  return (
    <Box h="100%" w="100%">
      <Header
        title={`Let's find an adventure together`}
        slogan={'we can show you a good time and a great story to share with people'}
        bg={'https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg?auto=compress&cs=tinysrgb&w=1600'}
      />
      <PageLayoutContainer>
        <Stack p="50px" spacing={5} bg="white" borderRadius="15px">
          <Filters />
          <ToursDisplay />
        </Stack>
      </PageLayoutContainer>
    </Box>
  )
}
