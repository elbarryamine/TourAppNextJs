import { extendTheme } from '@chakra-ui/react'
import _ from 'lodash'

const sharedTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  breakpoints: {
    xsss: '200px',
    xss: '400px',
    xs: '600px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
    xl: '1400px',
    xxl: '1600px',
  },
  zIndices: {
    drawer: 9999,
    homeNavigation: 9998,
    portal: 9998,
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
    heading: 'Raleway',
    body: 'Raleway',
    rale: 'Raleway',
  },
  colors: {
    color_dark: '#161a1d',
    color_light: '#FFFFFF',
    color_grey: '#717074',
    color_grey_1: '#717074',
    color_grey_2: '#C7C7C7',
    color_grey_3: '#EFEFEF',
    color_1: '#6347F9',
    color_2: '#FC747B',
    color_3: '#5b1216',
    color_4: '#43B97F',
    color_5: '#F6BB42',
  },
})
