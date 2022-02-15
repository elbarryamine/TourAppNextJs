import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  zIndices: {
    portal: 9999,
    sortByDropDown: 2,
  },
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
    sub: '10px',
    body: '12px',
    headline: '14px',
    header: '16px',
    display: '18px',
  },
  colors: {
    dark: {
      primary: '#7e3af2',
      overPrimary: '#ffffff',
      accent: '#eec643',
      bg: '#07070d',
      bg2: '#0f0f1a',
      text1: '#ffffff',
      text2: '#9E9E9E',
      text3: '#161a1d',
    },
    light: {
      primary: '#7e3af2',
      overPrimary: '#ffffff',
      accent: '#eec643',
      bg: '#ffffff',
      bg2: '#F3F1F5',
      text1: '#1A1C23',
      text2: '#6c757d',
      text3: '#e9ecef',
    },
    misc: {
      green: '#228B22',
      greenBg: '#95E1D3',
      red: '#FF2E63',
      redBg: '#FFC7C7',
      blue: '#3F72AF',
      blueBg: '#DBE2EF',
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
