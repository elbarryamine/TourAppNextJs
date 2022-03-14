import { useColorModeValue } from '@chakra-ui/react'

export function useChakraTheme() {
  /**
   * @returns Array<string> ==>  [background,background2,textColor1,textColor2]
   */
  let background = useColorModeValue('light.bg', 'dark.bg')
  let subBackground = useColorModeValue('light.bg2', 'dark.bg2')
  let text = useColorModeValue('light.text1', 'dark.text1')
  let subtext = useColorModeValue('light.text2', 'dark.text2')
  let accenttext = useColorModeValue('light.text3', 'dark.text3')
  let primary = useColorModeValue('light.primary', 'dark.primary')
  let accent = useColorModeValue('light.accent', 'dark.accent')
  let overPrimary = useColorModeValue('light.overPrimary', 'dark.overPrimary')
  return { background, subBackground, text, subtext, primary, accent, accenttext, overPrimary }
}

export function useLightChakraTheme() {
  /**
   * @returns Array<string> ==>  [background,background2,textColor1,textColor2]
   */
  let background = 'light.bg'
  let subBackground = 'light.bg2'
  let text = 'light.text1'
  let subtext = 'light.text2'
  let accenttext = 'light.text3'
  let primary = 'light.primary'
  let accent = 'light.accent'
  let overPrimary = 'light.overPrimary'
  return { background, subBackground, text, subtext, primary, accent, accenttext, overPrimary }
}
