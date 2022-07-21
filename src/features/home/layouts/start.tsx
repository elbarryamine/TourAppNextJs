import React from 'react'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import StartButton from './start-button'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function StartSection() {
  const { lessthan600 } = useResponsive()
  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1200px" color="color_dark" px={lessthan600 ? '20px' : '50px'}>
        <Flex
          px="20px"
          bg="#fdb6ba"
          borderRadius={lessthan600 ? '10px' : '15px'}
          py="50px"
          flexDir="column"
          gap={5}
          align="center"
          justify="center"
          bgImage="/assets/images/background-pink-rocks.svg"
          bgSize="cover"
          h="50%"
          bgRepeat="no-repeat">
          <Heading size="2xl" textAlign="center">
            Prepare Yourself & Let’s Explore
            <br /> The Beauty Of The World 🌍
          </Heading>
          <Text>We have many special offers especially for you.</Text>
          <StartButton />
        </Flex>
      </Container>
    </Flex>
  )
}

// background-pink-rocks
