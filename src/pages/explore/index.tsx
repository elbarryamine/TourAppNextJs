import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaPlane, FaPlaneArrival, FaSearch } from 'react-icons/fa'

export default function ExplorePage() {
  return (
    <Fragment>
      <Head>
        <title>Tourlek | Explore</title>
      </Head>
      <Navigation />
    </Fragment>
  )
}

function Navigation() {
  return (
    <Box h="70px" pos="sticky" top="70px" shadow="xs" color="text3">
      <Container maxW="container.xl" px="20px" h="100%">
        <Flex align="center" justify="space-between" h="100%">
          <Flex align="center" gap="5px">
            <Text fontWeight="900" fontSize="xl" color="primary">
              TOUR
            </Text>
            <FaPlaneArrival />
            <Text fontWeight="900" fontSize="xl">
              LEEK
            </Text>
          </Flex>
          <InputGroup maxW="500px" color="primary">
            <InputLeftElement>
              <FaSearch size="14px" />
            </InputLeftElement>
            <Input _focus={{ borderColor: 'primary' }} borderColor="primary" bg="white" placeholder="Search" />
          </InputGroup>
          <Flex
            justify="space-between"
            gap="40px"
            align="center"
            sx={{
              '.link': {
                fontWeight: '900',
                cursor: 'pointer',
              },
            }}>
            <Link href="/" passHref>
              <Text className="link">Home</Text>
            </Link>
            <Link href="/" passHref>
              <Text className="link" color="primary">
                Explore
              </Text>
            </Link>
            <Link href="/" passHref>
              <Text className="link">About</Text>
            </Link>
            <Button variant="outline" borderColor="primary" color="primary">
              Account
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
