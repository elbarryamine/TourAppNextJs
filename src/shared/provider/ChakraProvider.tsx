import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@shared/config/theme'

export default function CustomChakraProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
