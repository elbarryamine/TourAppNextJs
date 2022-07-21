import React, { ReactNode } from 'react'
import { theme } from '@shared/utils/theme'
import { ChakraProvider } from '@chakra-ui/react'

export default function CustomChakraProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
