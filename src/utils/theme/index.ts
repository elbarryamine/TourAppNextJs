import { extendTheme } from '@chakra-ui/react'
import _ from 'lodash'

const sharedTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  breakpoints: {
    xss: '25em',
    xs: '28em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },

  zIndices: {
    homeNavigation: 9999,
    portal: 9999,
    sortByDropDown: 2,
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
      body: {
        background: '#f3f2ef',
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
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
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
  fonts: {
    heading: 'Public Sans',
    body: 'Public Sans',
    rale: 'Raleway',
  },
  colors: {
    main_dark: '#1F3347',
    main_light: '#FFFFFF',
    main_grey: '#717074',
    main_color_1: '#FC747B',
    main_color_2: '#6347F9',
    card_color_1: '#43B97F',
    card_color_2: '#F6BB42',
  },
})
