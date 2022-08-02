import { ThemeOverride } from '@chakra-ui/react'

type GlobalStyles = Pick<ThemeOverride, 'styles'>

export default {
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: () => ({
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
        bg: 'linear-gradient(86.08deg, #FFF7F7 6.42%, #FDF7FA 45.67%, #F5F4FF 69.09%, rgba(245, 244, 255, 0.49) 100%), linear-gradient(58.7deg, #FFF7F7 23.13%, #FDF7FA 52.7%, #FAF6FC 61.18%, #F5F4FF 68.68%, rgba(245, 244, 255, 0.49) 85.31%), linear-gradient(180.08deg, rgba(255, 247, 247, 0.49) 72.31%, #FAF6FC 85.99%, #F5F4FF 99.96%)',
      },
    }),
  },
  zIndices: {
    navigation: 99,
  },
} as GlobalStyles
