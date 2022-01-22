import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}
export default function Card(props: Props & BoxProps) {
  return (
    <Box
      minH="150px"
      minW="150px"
      bg="darker"
      shadow="md"
      p="10px"
      cursor="pointer"
      _hover={{ boxShadow: 'dark-lg' }}
      w="max-content"
      transition="all 0.5s"
      borderRadius="15px"
      {...props}>
      {props.children}
    </Box>
  )
}
