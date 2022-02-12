import { useColorModeValue } from '@chakra-ui/react'

export function useChakraTheme() {
  /**
   * @returns Array<string> ==>  [background,background2,textColor1,textColor2]
   */
  const background = useColorModeValue('light.bg', 'dark.bg')
  const subBackground = useColorModeValue('light.bg2', 'dark.bg2')
  const text = useColorModeValue('light.text1', 'dark.text1')
  const subtext = useColorModeValue('light.text2', 'dark.text2')
  const accenttext = useColorModeValue('light.text3', 'dark.text3')
  const primary = useColorModeValue('light.primary', 'dark.primary')
  const accent = useColorModeValue('light.accent', 'dark.accent')
  const overPrimary = useColorModeValue('light.overPrimary', 'dark.overPrimary')
  return { background, subBackground, text, subtext, primary, accent, accenttext, overPrimary }
}
