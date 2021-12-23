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
    primary: 'rgb(0 118 255)',
  },
})

export default theme
