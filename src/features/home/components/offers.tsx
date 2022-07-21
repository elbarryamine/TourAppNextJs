import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useResponsive } from 'common/hooks/useResponsive'
import React from 'react'

export default function Offers() {
  const { lessthan600, lessthan1000 } = useResponsive()
  const offerflex = lessthan1000 ? (lessthan600 ? '0 0 100%' : '0 0 50%') : '0 0 calc(100% / 4)'
  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1200px" px={lessthan600 ? '20px' : '50px'}>
        <Stack spacing={10}>
          <Heading size="xl" textAlign="center">
            What we offer
          </Heading>
          <Flex align="center" flexWrap="wrap" rowGap="50px">
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/globe.svg" alt="service" h="80px" objectPosition="0%" objectFit="contain" />
              <Heading size="lg">Lots of choices</Heading>
              <Text color="color_grey_2" fontSize="md">
                Total 460+ destinations
                <br /> that we work with.
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/suit-case.svg" alt="service" h="80px" objectPosition="0%" objectFit="contain" />
              <Heading size="lg">Best Tour Guide</Heading>
              <Text color="color_grey_2" fontSize="md">
                Our tour guide with 15+
                <br /> years of experience.
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/ticket.svg" alt="service" h="80px" objectPosition="0%" objectFit="contain" />
              <Heading size="lg">Easy Booking</Heading>
              <Text color="color_grey_2" fontSize="md">
                With an easy and fast
                <br /> ticket purchase process.
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/money.svg" alt="service" h="80px" objectPosition="0%" objectFit="contain" />
              <Heading size="lg">Money Back</Heading>
              <Text color="color_grey_2" fontSize="md">
                Recieve you money back
                <br />
                if you are unsatisfied
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  )
}
