import React from 'react'
import { Box, Flex, Text, keyframes } from '@chakra-ui/react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createPortal } from 'react-dom'
const spin = keyframes`
to { transform: rotate(360deg); }
`
export function LoadingPage() {
  const container = document.querySelector('#preloader')
  return container
    ? createPortal(
        <Flex pos="absolute" overflow="hidden" zIndex="portal" top="0" left="0" w="100vw" h="100vh" align="center" justify="center">
          <Flex align="center" justify="center" gap="10px" color="main_color_2">
            <Box animation={`${spin} infinite 0.5s linear`}>
              <AiOutlineLoading3Quarters size="20px" />
            </Box>
            <Text fontWeight="extrabold" fontSize="body">
              Loading
            </Text>
          </Flex>
        </Flex>,
        container
      )
    : null
}
export function SimpleLoading() {
  return (
    <Flex w="100%" h="100%" align="center" justify="center">
      <Flex align="center" justify="center" gap="10px" color="main_color_2">
        <Box animation={`${spin} infinite 0.5s linear`}>
          <AiOutlineLoading3Quarters size="20px" />
        </Box>
        <Text fontWeight="extrabold" fontSize="body">
          Loading
        </Text>
      </Flex>
    </Flex>
  )
}
