import React from 'react'

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { useResponsive } from '@shared/hooks/useResponsive'

import Image from 'next/image'

export default function Header() {
  const { lessthan768, lessthan900 } = useResponsive()

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Stack flex={lessthan900 ? '0 0 100%' : '0 0 45%'} spacing={10}>
          <Box bg="#FFEBEC" p="20px" w="max-content" borderRadius="1000px">
            <Heading variant="subheader" color="color_2">
              Explore the World 🌎
            </Heading>
          </Box>
          <Heading
            as="h1"
            variant="display"
            size={lessthan768 ? '2xl' : '4xl'}
            fontWeight="bold"
            color="color_dark_blue"
            lineHeight="60pt"
            position="relative">
            It's a Big World
            <br /> Out There, Go
            <br /> Explore 🚀
          </Heading>
          <Text fontSize="md" fontWeight={400} color="color_grey_1" maxW="70%">
            We always make our customer happy by providing as many choices as possible
          </Text>
        </Stack>
        <Box pos="relative" h="500px" w="40%">
          <Image src="/assets/graphics/camel-map.svg" alt="camel-image" layout="fill" />
        </Box>
      </Flex>

      <Box position="relative">
        <Image src="/assets/graphics/line-2.svg" alt="" layout="fill" />
      </Box>
    </Box>
  )
}
