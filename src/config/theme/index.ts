import { extendTheme } from '@chakra-ui/react'
import _ from 'lodash'

const sharedTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  zIndices: {
    homeNavigation: 9999,
    portal: 9999,
    sortByDropDown: 2,
  },
  fonts: {
    heading: 'Raleway',
    body: 'Public Sans',
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
}
export const dashboardTheme = extendTheme({
  ..._.cloneDeep(sharedTheme),
  colors: {
    dark: {
      primary: '#4fd1c5',
      overPrimary: '#ffffff',
      accent: '#eec643',
      bg: '#1a202c',
      bg2: '#1f2733',
      text1: '#ffffff',
      text2: '#9E9E9E',
      text3: '#161a1d',
    },
    light: {
      primary: '#4fd1c5',
      overPrimary: '#ffffff',
      accent: '#eec643',
      bg: '#ffffff',
      bg2: '#fafafa',
      text1: '#1A1C23',
      text2: '#6c757d',
      text3: '#e9ecef',
    },
    misc: {
      green: '#48BB78',
      greenBg: '#C6F6D5',
      red: '#E53E3E',
      redBg: '#FED7D7',
      blue: '#3182CE',
      blueBg: '#BEE3F8',
    },
  },
})
export const appTheme = extendTheme({
  ..._.cloneDeep(sharedTheme),
  colors: {
    primary: '#3182CE',
    overPrimary: '#ffffff',
    secondary: '#FED7D7',
    accent: '#eec643',
    bg: '#1a202c',
    bg2: '#1f2733',
    text1: '#ffffff',
    text2: '#9E9E9E',
    text3: '#011627',
  },
})
