import React from 'react'
import { GridItem, useColorModeValue } from '@chakra-ui/react'
import { useChakraTheme } from 'config/theme/usetheme'

export function Navigation() {
  const [BG, BG_2, text, subtext] = useChakraTheme()

  return <GridItem bg={BG} gridColumn="1/1" gridRow="2/-1"></GridItem>
}
