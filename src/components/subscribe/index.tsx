import React from 'react'
import { Stack, Heading, Text, Input, Button, StackProps } from '@chakra-ui/react'

export function Subscribe(props: StackProps) {
  return (
    <Stack spacing={3} p="20px" bg="main_dark" border="1px solid" borderColor="whitesmoke" borderRadius="5px" {...props}>
      <Heading color="main_light" size="md">
        Subscribe
      </Heading>
      <Text color="main_light" fontSize="sm">
        Get Notified when a new adventure that you might like has been added{' '}
      </Text>
      <Input
        bg="white"
        borderColor="main_light"
        placeholder="Email Address"
        _placeholder={{ fontSize: 'xs', fontWeight: 300, color: 'gray.400' }}
      />
      <Button bg="main_color_2" color="white">
        Submit
      </Button>
    </Stack>
  )
}
