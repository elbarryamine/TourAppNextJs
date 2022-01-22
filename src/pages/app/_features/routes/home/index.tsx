import React from 'react'
import { Box, Text, Flex, Grid } from '@chakra-ui/react'
import Card from 'components/card'
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
      templateColumns="1fr 1fr 1fr"
      templateRows="150px"
      gap="10px"
      w="100%"
      color="light"
      sx={{ '& div': { fontWeight: 'extrabold', textTransform: 'uppercase' } }}>
      <Card w="100%">Tours overall score</Card>
      <Card w="100%">Tours overall rating</Card>
      <Card w="100%"></Card>
    </Grid>
  )
}
