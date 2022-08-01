import React from 'react'
import { Flex, Heading, Text, Stack, Box } from '@chakra-ui/react'
import { useResponsive } from '@shared/hooks/useResponsive'
import Image from 'next/image'

export default function Experience() {
  const { lessthan768, lessthan900 } = useResponsive()
  return (
    <Box as="section">
      <Flex align="center" justify="space-between" gap="50px" flexDir={lessthan900 ? 'column' : 'row'}>
        <Box pos="relative" h="500px" flex="1 1 49%">
          <Image src="/assets/images/girl-verified.svg" alt="service" layout="fill" />
        </Box>
        <Stack flex="0 0 49%" spacing={8}>
          <Heading size={lessthan768 ? '2xl' : '4xl'} fontWeight={100}>
            We know what we do <br />
            and how to make you happier ♥
          </Heading>
          <Text fontSize="md" fontWeight={100} color="color_grey_2">
            over 10 years of experience in the industry we can show you a great experience with a reasonable cost
          </Text>
          <Flex
            align={lessthan768 ? 'start' : 'center'}
            justify={lessthan768 ? 'center' : 'space-between'}
            flexDir={lessthan768 ? 'column' : 'row'}
            gap="20px">
            <Stack spacing={2}>
              <Heading size="lg" color="color_1">
                10
              </Heading>
              <Text color="color_grey_2" fontSize="md">
                Years of Experience
              </Text>
            </Stack>
            <Stack spacing={2}>
              <Heading size="lg" color="color_1">
                123+
              </Heading>
              <Text color="color_grey_2" fontSize="md">
                Destination Collaboration
              </Text>
            </Stack>
            <Stack spacing={2}>
              <Heading size="lg" color="color_1">
                10k+
              </Heading>
              <Text color="color_grey_2" fontSize="md">
                Happy Customer
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}
