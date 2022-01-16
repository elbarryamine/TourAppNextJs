import React from 'react'
import { Input } from '@chakra-ui/react'

export function SubmitInput({ title }: { title: string }) {
  return (
    <Input
      boxShadow="shadow"
      borderColor="gray"
      type="submit"
      _hover={{
        background: 'secondary',
      }}
      _focus={{}}
      _active={{
        color: 'secondary',
        bg: 'transparent',
        border: '1px',
        borderColor: 'gray',
      }}
      fontWeight="bold"
      bg="primary"
      color="white"
      value={title}
    />
  )
}
