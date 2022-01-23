import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
export function Home() {
  return (
    <Box color="black" h="100%" w="100%">
      <FinancialCards />
    </Box>
  )
}

function FinancialCards() {
  return (
    <Grid
      templateColumns={'1fr 1fr'}
      gap="10px"
      w="100%"
      color="light"
      sx={{ '.title': { fontWeight: 'extrabold', fontSize: 'md', textTransform: 'uppercase' } }}></Grid>
  )
}
