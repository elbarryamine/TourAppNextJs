import React from 'react'
import { Box, FormControl, Text, Input, Select } from '@chakra-ui/react'
import { FormInput } from '../../../../../../components/form/input'

export function ToursWorkSpaceCreate() {
  return (
    <Box d="flex" alignItems="flex-start" ml="200px">
      <Box w="400px" h="80vh" py="20px">
        <Text px="10px" textAlign="center" fontWeight="extrabold" color="dark" fontSize="xl">
          Add Main Details
        </Text>
        <Box w="100%" h="1px" my="20px" bg="gray.100" />
        <FormControl w="100%" px="10px">
          <FormInput type="name" title="Title" />
          <FormInput type="number" title="Duration" />
          <FormInput type="category" title="Category" />
          <Select
            mb="20px"
            placeholder="Category"
            color="dark"
            bg="white"
            border="1px solid"
            borderColor="gray"
            _focus={{
              '& + .label': {
                transform: 'translateY(-45%)',
                color: 'red',
                bg: 'secondary',
                '& p': {
                  bg: 'secondary',
                },
              },
            }}
            boxShadow="shadow2">
            <option value="option1">Category 1</option>
            <option value="option2">Category 2</option>
            <option value="option3">Category 3</option>
          </Select>
          <Select
            placeholder="Location"
            bg="white"
            _placeholder={{ fontWeight: 'bolder', color: 'dark' }}
            border="1px solid"
            borderColor="gray"
            _focus={{
              '& + .label': {
                transform: 'translateY(-45%)',
                color: 'red',
                bg: 'secondary',
                '& p': {
                  bg: 'secondary',
                },
              },
            }}
            boxShadow="shadow2">
            <option value="option1">Location 1</option>
            <option value="option2">Location 2</option>
            <option value="option3">Location 3</option>
          </Select>
        </FormControl>
        <Box w="100%" h="1px" my="20px" bg="gray.100" />
        <Text px="10px" textAlign="center" fontWeight="extrabold" color="dark" fontSize="xl">
          Upload Images
        </Text>
        <Box w="100%" h="1px" my="20px" bg="gray.100" />
        <FormControl w="100%" px="10px">
          <Input type="file" name="images" multiple border="0" />
        </FormControl>
      </Box>
    </Box>
  )
}
