import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Filters from '@components/Layouts/Filter'

import Header from './layouts/Header'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'
import ToursDisplay from './layouts/ToursDisplay'

export default function BrowsePage() {
  return (
    <Box h="100%" w="100%">
      <Header
        title={`Things To Do In New York City🗽`}
        slogan={'Eat, shop, and fall in love with world-class museums, historical landmarks, and skyscrapers galore.'}
        bg={'assets/images/99.jpeg'}
      />
      <PageLayoutContainer>
        <Stack p="50px" spacing={5} bg="white" borderRadius="15px">
          <Filters />
          <Stack spacing="40px">
            <ToursDisplay hasMore={true} heading={'Top activities ⛳'} />
            <ToursDisplay hasMore={false} heading={'Top sights in New York City 🔥'} />
            <ToursDisplay hasMore={true} heading={'City skyline cruises 🏙️'} />
          </Stack>
        </Stack>
      </PageLayoutContainer>
    </Box>
  )
}
