import { AccordionButton, Button, DrawerCloseButton, extendTheme, Heading, Input, NumberInput, Textarea } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import fontSizes from './fontSizes'
import sizes from './sizes'
import fonts from './fontFamily'
import components from './components'
import breakpoints from './breakpoints'
import zIndices from './zIndices'

const focus = {
  boxShadow: `0 0 0 1px ${colors.color_1}`,
  zIndex: 1,
  borderColor: `${colors.color_1}`,
  _dark: {
    boxShadow: `0 0 0 1px ${colors.color_1}`,
    zIndex: 1,
    borderColor: `${colors.color_1}`,
  },
}
const focusButton = {
  boxShadow: `0 0 0 3px ${colors.color_1}`,
  _dark: {
    boxShadow: `0 0 0 3px ${colors.color_1}`,
  },
}

Heading.defaultProps = {
  as: 'h1',
}
Button.defaultProps = { ...Button.defaultProps, _focus: focusButton, _hover: { opacity: 0.8 } }
AccordionButton.defaultProps = { ...AccordionButton.defaultProps, _focus: focusButton, _hover: { opacity: 0.8 } }
DrawerCloseButton.defaultProps = { ...DrawerCloseButton.defaultProps, _focus: focusButton, _hover: { opacity: 0.8 } }
Input.defaultProps = { ...Input.defaultProps, _focus: focus }
NumberInput.defaultProps = { ...NumberInput.defaultProps, _focus: focus }
Textarea.defaultProps = { ...Textarea.defaultProps, _focus: focus }

const overrides = {
  ...styles,
  colors,
  fontSizes,
  components,
  fonts,
  sizes,
  breakpoints,
  zIndices,
}

const theme = extendTheme(overrides)

export default theme
