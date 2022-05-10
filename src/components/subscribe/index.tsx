import React from 'react'
import { Stack, Heading, Text, Input, Button, StackProps } from '@chakra-ui/react'

export function Subscribe(props: StackProps) {
  return (
    <Stack spacing={3} p="20px" bg="white" border="1px solid" borderColor="whitesmoke" borderRadius="5px" {...props}>
      <Heading color="primary" size="md">
        Subscribe
      </Heading>
      <Text color="GrayText" fontSize="sm">
        Get Notified when a new adventure that you might like has been added{' '}
      </Text>
      <Input
        bg="white"
        borderColor="primary"
        placeholder="Email Address"
        _placeholder={{ fontSize: 'xs', fontWeight: 300, color: 'gray.400' }}
      />
      <Button bg="primary" color="white">
        Submit
      </Button>
    </Stack>
  )
}
