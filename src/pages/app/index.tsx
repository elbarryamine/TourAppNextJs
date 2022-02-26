import { ChakraProvider } from '@chakra-ui/react'
import { dashboardTheme } from 'config/theme'
import App from '../../apps/dashboard'

export default function AppProvidedWithOwnChakraProvider() {
  return (
    <ChakraProvider theme={dashboardTheme}>
      <App />
    </ChakraProvider>
  )
}
