import React from 'react'
import { Box, Button, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <Box h="70px" top="0px" color="secondary" zIndex="2">
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Image src="/assets/logo.png" alt="logo" width="50px" height="50px" />
        <Flex gap="50px" alignItems="center" sx={{ '& a': { fontSize: 'sm', fontWeight: '900' } }} flexWrap="wrap">
          <Link href="/explore" passHref>
            Explore
          </Link>
          <Link href="/" passHref>
            Services
          </Link>
          <Link href="/" passHref>
            About
          </Link>
          <Link href="/login" passHref>
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
