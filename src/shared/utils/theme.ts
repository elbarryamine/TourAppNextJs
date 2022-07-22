import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
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
  
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    rale: 'Inter',
  },
  colors: {
    color_dark: '#161a1d',
    color_light: '#FFFFFF',
    color_dark_blue: '#1F3347',
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
