import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
  fontWeights: {
    normal: 200,
    medium: 500,
    bold: 800,
  },
  colors: {
    primary: 'rgb(0 0 0)',
    primary2: 'rgb(0 0 0 / 39%)',
  },
  shadows: {
    shadow: '0 4px 14px 0 rgb(0 0 0 / 39%)',
    shadow2: '0 4px 14px 0 rgb(0 0 0 /5%)',
  },
  styles: {
    global: {
      '*, *::before, &::after': {
        fontSize: 'sm',
      },
    },
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
})

export default theme
