import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

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
    <Box h="70px" pos="sticky" top="0px" shadow="xs" bg="bg" color="text1" zIndex="2">
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Heading size="md">Tourleek</Heading>
        <Flex gap="50px" alignItems="center">
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/" passHref>
            Explore
          </Link>
          <Link href="/" passHref>
            Services
          </Link>
          <Link href="/" passHref>
            About
          </Link>
          <Link href="/" passHref>
            Sign in
          </Link>
          <Button bg="primary">Sign up</Button>
        </Flex>
      </Container>
    </Box>
  )
}
