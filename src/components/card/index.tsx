import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
}
export default function Card(props: Props & BoxProps) {
  return (
    <Box
      minH="120px"
      minW="120px"
      bg="light"
      p="10px"
      border="1px solid"
      borderColor="subtext"
      cursor="pointer"
      w="max-content"
      transition="all 0.5s"
      {...props}>
      {props.children}
    </Box>
  )
}
