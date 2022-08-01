import React from 'react'
import { Container, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function Experience() {
  const { lessthan768, lessthan600, lessthan900 } = useResponsive()
  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1400px" px={lessthan600 ? '20px' : '50px'}>
        <Flex align="center" justify="space-between" gap="50px" flexDir={lessthan900 ? 'column' : 'row'}>
          <Image
            src="/assets/graphics/tour-experience.svg"
            alt="service"
            objectFit="contain"
            maxH="500px"
            objectPosition="0%"
            flex="0 0 49%"
          />
          <Stack flex="0 0 49%" spacing={8}>
            <Heading fontSize="20px" fontWeight={700} color="color_1">
              OUR EXPERIENCE
            </Heading>
            <Heading fontSize="45px" color="color_dark_blue" fontWeight="700" mt="10px" mb="15px">
              With Our Experience We Will Serve You ♥️🙌
            </Heading>

            <Text fontSize="md" fontWeight={400} color="color_grey_1">
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
                <Text color="color_grey_4" fontSize="md">
                  Years of Experience
                </Text>
              </Stack>
              <Stack spacing={2}>
                <Heading size="lg" color="color_1">
                  123+
                </Heading>
                <Text color="color_grey_4" fontSize="md">
                  Destination Collaboration
                </Text>
              </Stack>
              <Stack spacing={2}>
                <Heading size="lg" color="color_1">
                  10k+
                </Heading>
                <Text color="color_grey_4" fontSize="md">
                  Happy Customer
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  )
}
