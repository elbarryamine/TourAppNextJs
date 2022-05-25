import React from 'react'
import { Input } from '@chakra-ui/react'

export function SubmitInput({ title }: { title: string }) {
  return <Input boxShadow="md" type="submit" _active={{}} fontWeight="bold" bg="main_color_1" color="white" value={title} />
}
