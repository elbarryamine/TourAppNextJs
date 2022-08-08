import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import StartButton from './StartButton'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function StartSection() {
  const { lessthan600 } = useResponsive()
  return (
    <Box as="section">
      <Flex
        px="20px"
        bg="#FFF3F3"
        borderRadius={lessthan600 ? '10px' : '15px'}
        py="90px"
        flexDir="column"
        gap={5}
        align="center"
        justify="center"
        bgImage="/assets/images/background-pink-rocks.svg"
        bgSize="cover"
        h="50%"
        bgRepeat="no-repeat">
        <Heading size="2xl" textAlign="center" lineHeight="md" color="color_dark_blue">
          Prepare Yourself & Let’s Explore
          <br /> The Beauty Of The World 🌍
        </Heading>
        <Text color="color_dark_blue">We have many special offers especially for you.</Text>
        <StartButton />
      </Flex>
    </Box>
  )
}
