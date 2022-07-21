import React from 'react'

import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { useResponsive } from '@shared/hooks/useResponsive'

export default function Header() {
  const { lessthan768, lessthan600, lessthan900 } = useResponsive()
  return (
    <Flex align="center" as="header" pt="50px">
      <Container
        bgImage="/assets/images/camels-map.svg"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPos="80%"
        maxW="1200px"
        px={lessthan600 ? '20px' : '50px'}>
        <Flex align="center" justify="space-between">
          <Stack flex={lessthan900 ? '0 0 100%' : '0 0 49%'} spacing={10}>
            <Heading size={lessthan768 ? '2xl' : '4xl'} fontWeight={100}>
              It&apos;s a Big World <br /> Out There,
              <br />
              Go Explore
            </Heading>
            <Text fontSize="md" fontWeight={100} color="color_grey_2">
              We always make our customer happy by providing as many choices as possible
            </Text>
            <StartButton w="max-content" />
          </Stack>
        </Flex>
      </Container>
    </Flex>
  )
}
