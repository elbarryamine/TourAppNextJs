import { FormControl, FormLabel, Heading, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'

export function CreateTourPage() {
  return (
    <FormControl>
      <Stack spacing="20px">
        <Heading>Create your tour</Heading>
        <FormControl>
          <FormLabel htmlFor="tour_name">Tour Title</FormLabel>
          <Input id="tour_name" type="name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tour_description">Tour Description</FormLabel>
          <Textarea id="tour_description" placeholder="Tour Description" maxH="150px" />
        </FormControl>
      </Stack>
    </FormControl>
  )
}
