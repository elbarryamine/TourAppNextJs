import React from 'react'
import { GridItem, useColorModeValue } from '@chakra-ui/react'

export function Navigation() {
  const BG = useColorModeValue('light.bg', 'dark.bg')
  return <GridItem bg={BG} gridColumn="1/1" gridRow="2/-1"></GridItem>
}
