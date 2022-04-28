import { Flex, Image } from '@chakra-ui/react'
import { useLightChakraTheme } from 'hooks/usetheme'
import React from 'react'

export function Navigation() {
  const { background, text } = useLightChakraTheme()

  return (
    <Flex align="center" bg={background} color={text} h="50px" sx={styles}>
      <div className="container">
        <Image className="image" src="" alt="logo" />
      </div>
    </Flex>
  )
}

const styles = {
  '.container': { maxW: '1440px', mx: 'auto', w: '100%' },
  '.image': {},
  '.menu': {},
}
