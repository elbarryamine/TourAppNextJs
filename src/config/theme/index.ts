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
  fontSizes: {
    '1': '10px',
    '2': '12px',
    '3': '14px',
    '4': '16px',
    '5': '18px',
  },
  colors: {
    // dark: {
    //   primary: '#7e3af2',
    //   accent: '#000087',
    //   bg: '#121317',
    //   bg2: '#1a1c23',
    //   text1: '#E5E7EB',
    //   text2: '#9E9E9E',
    //   text3: '#24262D',
    // },
    // light: {
    //   primary: '#7e3af2',
    //   accent: '#000087',
    //   bg: '#ffffff',
    //   bg2: '#f0f1f2',
    //   text1: '#1A1C23',
    //   text2: '#707257',
    //   text3: '#24262D',
    // },
    dark: {
      primary: '#eec643',
      accent: '#682f55',
      bg: '#0f0f0f',
      bg2: '#151515',
      text1: '#E5E7EB',
      text2: '#9E9E9E',
      text3: '#24262D',
    },
    light: {
      primary: '#eec643',
      accent: '#682f55',
      bg: '#ffffff',
      bg2: '#e3e3e3',
      text1: '#1A1C23',
      text2: '#707257',
      text3: '#24262D',
    },
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
