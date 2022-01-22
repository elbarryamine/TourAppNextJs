import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
  fontWeights: {
    normal: 300,
    medium: 500,
    bold: 700,
    extrabold: 900,
  },
  colors: {
    primary: 'hsl(353, 86%, 54%)',
    secondary: 'hsl(207, 95%, 20%)',
    accent: 'hsl(40, 91%, 91%)',
    light: 'hsl(0, 0%, 97%)',
    lightshade: 'hsl(0, 0%, 87%)',
    subtext: 'hsl(0, 0%, 65%)',
    subtextdarker: 'hsl(0, 0%, 35%)',
    dark: 'hsl(0, 0%, 15%) ',
    darker: 'hsl(0, 0%, 12%)',
  },
  shadows: {
    shadow: '0 4px 14px 0 rgb(0 118 255 / 39%)',
    shadow2: '0 4px 14px 0 rgb(0 118 255 /5%)',
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
    md: '0.3rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
})

export default theme
