import { ThemeOverride } from '@chakra-ui/react'

type GlobalStyles = Pick<ThemeOverride, 'styles'>

export default {
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: ({ colorMode }) => ({
      '.swap-enter': {
        opacity: '0',
      },
      '.swap-enter-active': {
        opacity: '1',
        transition: 'all 0.4s',
      },
      '.swap-exit': {
        opacity: '1',
      },
      '.swap-exit-active': {
        opacity: '0',
        transition: 'all 0.4s',
      },
      '*::-webkit-scrollbar': {
        width: '8px',
        maxHeight: '4px',
      },
      '*::-webkit-scrollbar-track': {
        background: '#efefef',
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#c7c7c7',
        borderRadius: '300px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: '#c7c7c7',
      },
      body: {
        background: '#f3f2ef',
      },
    }),
  },
  zIndices: {
    navigation: 99,
  },
} as GlobalStyles
