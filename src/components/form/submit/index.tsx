import React from 'react'
import { Input } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'

export function SubmitInput({ title }: { title: string }) {
  const { overPrimary, primary } = useChakraTheme()
  return (
    <Input
      boxShadow="md"
      type="submit"
      _hover={{
        color: primary,
        bg: overPrimary,
        border: '1px',
        borderColor: primary,
      }}
      _focus={{
        color: primary,
        bg: overPrimary,
        outline: '2px',
        outlineColor: primary,
      }}
      _active={{}}
      fontWeight="bold"
      bg={primary}
      color={overPrimary}
      value={title}
    />
  )
}
