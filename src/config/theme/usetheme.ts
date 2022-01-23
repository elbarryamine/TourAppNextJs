import { useColorModeValue } from '@chakra-ui/react'

export function useChakraTheme() {
  /**
   * @returns Array<string> ==>  [background,background2,textColor1,textColor2]
   */

  const BG = useColorModeValue('light.bg', 'dark.bg')
  const BG_2 = useColorModeValue('light.bg2', 'dark.bg2')
  const text = useColorModeValue('light.text1', 'dark.text1')
  const subtext = useColorModeValue('light.text2', 'dark.text2')
  return [BG, BG_2, text, subtext]
}
