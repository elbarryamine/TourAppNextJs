import React from 'react'
import { Box, FormControl, Text } from '@chakra-ui/react'
import { FormInput } from '../../../../../../components/form/input'

export function ToursWorkSpaceCreate() {
  return (
    <Box d="flex" alignItems="center" justifyContent="center" h="100%" w="100%">
      <Box w="400px" h="80vh" border="1px solid" py="20px" borderColor="gray" borderRadius="10px" overflow="hidden">
        <Text px="10px" textAlign="center" fontWeight="extrabold" color="dark" fontSize="xl">
          Create a new awesome tour
        </Text>
        <Box w="100%" h="1px" bg="gray" my="20px" />
        <FormControl w="100%" px="10px">
          <FormInput type="name" title="Title" />
          <FormInput type="Name" title="Location" />
        </FormControl>
      </Box>
    </Box>
  )
}
