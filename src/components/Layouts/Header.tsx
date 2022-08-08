import React from 'react'
import SearchBar from './SearchBar'
import { Box, Flex, Heading } from '@chakra-ui/react'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export interface HeaderProps {
  title?: string
  slogan?: string
  bg?: string
}
export default function Header({ title, slogan, bg }: HeaderProps) {
  return (
    <Box h="400px" pos="relative">
      <Box bg="#00000060" pos="absolute" top="0" left="0" h="100%" w="100%" zIndex="2">
        <PageLayoutContainer h="100%">
          <Flex flexDir="column" justify="center" h="100%">
            <Heading color="white" size="4xl" fontWeight={400} mb="10px">
              {title}
            </Heading>
            <Heading size="md" color="color_grey_3" fontWeight={200}>
              {slogan}
            </Heading>
          </Flex>
          <Box transform="translateY(-50%)">
            <SearchBar />
          </Box>
        </PageLayoutContainer>
      </Box>
      <Box pos="absolute" top="0" left="0" h="100%" w="100%" zIndex="1" bgImage={bg} bgPos="center" bgRepeat="no-repeat" bgSize="cover" />
    </Box>
  )
}
