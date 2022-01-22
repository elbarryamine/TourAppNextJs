import React from 'react'
import { Box, Text, Flex, Grid } from '@chakra-ui/react'
import Card from '../../../../../components/card'
export function Home() {
  return (
    <Flex h="100%" w="100%" color="black" gap="5px">
      <FinancialCards />
    </Flex>
  )
}

function FinancialCards() {
  return (
    <Grid templateColumns="1fr 1fr 1fr" gap="10px" w="100%">
      <Card w="100%"></Card>
      <Card w="100%"></Card>
      <Card w="100%"></Card>
    </Grid>
  )
}
