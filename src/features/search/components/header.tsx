import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex h="20vh" p="20px" align="center" justify="center">
      <Box>
        <Heading fontWeight="100" sx={{ span: { color: 'primary.10', textDecor: 'dashed' } }} textTransform="uppercase">
          <span>Browse</span> hundreds of tours over <span>Morrocco</span>
        </Heading>
        <Text
          color="GrayText"
          fontSize="xs"
          sx={{ span: { color: 'primary.10' }, '.scratch': { textDecor: 'line-through', fontWeight: '100', color: 'gray.900' } }}
          textTransform="uppercase">
          We make sure you find <span className="scratch">a tour</span> <span>the Right adventure</span>
        </Text>
      </Box>
    </Flex>
  )
}
