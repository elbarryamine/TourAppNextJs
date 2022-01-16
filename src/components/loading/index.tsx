import React from 'react'
import { Box, Flex, Text, keyframes } from '@chakra-ui/react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const spin = keyframes`
to { transform: rotate(360deg); }
`
export function LoadingPage() {
  return (
    <Flex pos="absolute" overflow="hidden" zIndex="1000" top="0" left="0" w="100vw" h="100vh" align="center" justify="center">
      <Flex align="center" justify="center" gap="10px" color="primary">
        <Box animation={`${spin} infinite 0.5s linear`}>
          <AiOutlineLoading3Quarters size="20px" />
        </Box>
        <Text fontWeight="extrabold" fontSize="lg">
          Loading
        </Text>
      </Flex>
    </Flex>
  )
}
