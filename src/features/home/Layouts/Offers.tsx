import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useResponsive } from '@shared/hooks/useResponsive'
import React from 'react'

export default function Offers() {
  const { lessthan600, lessthan1000 } = useResponsive()
  const offerflex = lessthan1000 ? (lessthan600 ? '0 0 100%' : '0 0 50%') : '0 0 235px'
  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1400px" px={lessthan600 ? '20px' : '50px'}>
        <Stack spacing={10}>
          <Heading fontSize="20px" fontWeight={700} color="color_1">
            WHAT WE SERVE
          </Heading>
          <Flex align="center" flexWrap="wrap" justifyContent="space-between" mt="15px !important">
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Heading fontSize="45px" color="color_dark_blue" fontWeight="700">
                Top Values
                <br /> For You 🔥
              </Heading>
              <Text color="color_grey_4" fontSize="md">
                Try a variety of benefits when
                <br />
                using our services
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/globe.svg" alt="service" h="60px" objectPosition="0%" objectFit="contain" />
              <Heading size="md" color="color_dark_blue" fontWeight="700">
                Lots of choices
              </Heading>
              <Text color="color_grey_4" fontSize="md">
                Total 460+ destinations
                <br /> that we work with.
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/suit-case.svg" alt="service" h="60px" objectPosition="0%" objectFit="contain" />
              <Heading size="md" color="color_dark_blue" fontWeight="700">
                Best Tour Guide
              </Heading>
              <Text color="color_grey_4" fontSize="md">
                Our tour guide with 15+
                <br /> years of experience.
              </Text>
            </Stack>
            <Stack spacing={5} flex={offerflex} align={lessthan600 ? 'center' : undefined}>
              <Image src="/assets/images/ticket.svg" alt="service" h="70px" objectPosition="0%" objectFit="contain" />
              <Heading size="md" color="color_dark_blue" fontWeight="700">
                Easy Booking
              </Heading>
              <Text color="color_grey_4" fontSize="md">
                With an easy and fast
                <br /> ticket purchase process.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  )
}
