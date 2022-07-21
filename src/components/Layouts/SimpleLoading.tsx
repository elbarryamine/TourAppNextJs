import React from 'react'
import { Box, Flex, Text, keyframes, FlexProps, Icon } from '@chakra-ui/react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createPortal } from 'react-dom'
const spin = keyframes`
to { transform: rotate(360deg); }
`

export function SimpleLoading({ hideText, ...props }: FlexProps & { hideText?: boolean }) {
  return (
    <Flex w="100%" align="center" justify="center" {...props}>
      <Flex align="center" justify="center" gap="10px">
        <Box animation={`${spin} infinite 0.5s linear`} h="25px">
          <Icon as={AiOutlineLoading3Quarters} color="color_1" h="100%" />
        </Box>
        {!hideText && (
          <Text fontWeight="extrabold" fontSize="body" color="color_1">
            Loading
          </Text>
        )}
      </Flex>
    </Flex>
  )
}
export function LoadingPage(props: FlexProps & { hideText?: boolean }) {
  const container = document?.querySelector('#preloader')
  return container ? createPortal(<SimpleLoading {...props} />, container) : null
}
