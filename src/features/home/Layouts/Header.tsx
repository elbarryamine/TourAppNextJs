import React from 'react'

import { Box, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

import { useResponsive } from '@shared/hooks/useResponsive'
import StartButton from './StartButton'

export default function Header() {
  const { lessthan768, lessthan600, lessthan900, lessthan1400 } = useResponsive()
  return (
    <Flex align="center" as="header">
      <Container pr={lessthan1400 ? '0' : '50'} maxW="1400px" px={lessthan600 ? '20px' : '50px'}>
        <Flex justify="space-between">
          <Stack flex={lessthan900 ? '0 0 100%' : '0 0 45%'} spacing={10} mt="130px">
            <Heading as="h6" size="14px" fontWeight="bold" color="color_2" bg="#FFEBEC" p="20px" rounded="50" w="fit-content">
              Explore the World 🌎
            </Heading>
            <Heading
              size={lessthan768 ? '2xl' : '4xl'}
              fontWeight="bold"
              color="color_dark_blue"
              lineHeight="60pt"
              position="relative"
              mt="20px">
              It's a Big{' '}
              <Box position="relative" display="inline-block">
                World
                <Image src="/assets/graphics/line-1.svg" alt="Dan Abramov" position="absolute" top="70" w="210px" />
              </Box>
              <br /> Out There, Go
              <br /> Explore 🚀
            </Heading>
            <Text fontSize="md" fontWeight={100} color="color_grey_2">
              We always make our customer happy by providing as many choices as possible
            </Text>
            <StartButton w="max-content" />
          </Stack>
          <Box>
            <Image src="/assets/graphics/camel-map.svg" alt="Dan Abramov" w="100%" />
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}
