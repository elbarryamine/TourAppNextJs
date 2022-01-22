import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}
export default function Card(props: Props & BoxProps) {
  return (
    <Box
      minH="100px"
      minW="150px"
      bg="white"
      p="10px"
      cursor="pointer"
      _hover={{ boxShadow: 'lg' }}
      w="max-content"
      transition="all 0.5s"
      borderRadius="15px"
      boxShadow="sm"
      {...props}>
      {props.children}
    </Box>
  )
}
