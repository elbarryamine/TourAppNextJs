import React from 'react'
import SearchBar from './SearchBar'
import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function Header() {
  return (
    <Box h="400px" pos="relative">
      <Box bg="#00000060" pos="absolute" top="0" left="0" h="100%" w="100%" zIndex="2">
        <PageLayoutContainer h="100%">
          <Flex flexDir="column" justify="center" h="100%">
            <Heading color="white" size="4xl" fontWeight={400}>
              Let's find a adventure together
            </Heading>
            <Heading size="md" color="color_grey_3" fontWeight={200}>
              we can show you a good time and a great story to share with people
            </Heading>
          </Flex>
          <Box transform="translateY(-50%)">
            <SearchBar />
          </Box>
        </PageLayoutContainer>
      </Box>
      <Box
        pos="absolute"
        top="0"
        left="0"
        h="100%"
        w="100%"
        zIndex="1"
        bgImage="https://images.pexels.com/photos/2106776/pexels-photo-2106776.jpeg?auto=compress&cs=tinysrgb&w=1600"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      />
    </Box>
  )
}
