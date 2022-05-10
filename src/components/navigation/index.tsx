import React from 'react'
import { Box, Button, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  return (
    <Box h="70px" top="0px" color="white" bg="primary" zIndex="2" borderBottom="1px solid" borderColor="GrayText">
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Image src="/assets/logo.png" alt="logo" width="50px" height="50px" />
        <Flex gap="50px" alignItems="center" sx={{ '& a': { fontSize: 'sm', fontWeight: '900' } }} flexWrap="wrap">
          <Link href="/search" passHref>
            Search
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
          <Button
            variant="outline"
            colorScheme="none"
            bg="white"
            color="primary"
            _hover={{ color: 'primary.50', borderColor: 'primary.50' }}>
            Sign up
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
