import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

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
    <Box h="70px" pos="sticky" top="0px" shadow="xs" color="secondary" zIndex="2" bg="white">
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Image src="/assets/logo.jpg" alt="logo" width="50px" height="50px" />
        <Flex gap="50px" alignItems="center" sx={{ '& a': { fontSize: 'sm', fontWeight: '900' } }}>
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
          <Button variant="outline" colorScheme="none" color="primary.10" _hover={{ color: 'primary.50', borderColor: 'primary.50' }}>
            Sign up
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
