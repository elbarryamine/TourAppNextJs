import React from 'react'
import { Box } from '@chakra-ui/react'
import { ToursPageHeader, ToursPageTable } from './_components'

export function ToursPage() {
  return (
    <Box h="100%" w="100%" p="20px">
      <ToursPageHeader />
      <ToursPageTable />
    </Box>
  )
}
