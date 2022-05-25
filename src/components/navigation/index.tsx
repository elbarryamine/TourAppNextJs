import React from 'react'
import { Box, Button, Container, Flex, Heading, chakra } from '@chakra-ui/react'
import Link from 'next/link'

export function Navigation() {
  return (
    <Box
      h="70px"
      top="0px"
      color="main_dark"
      bg="main_light"
      zIndex="2"
      borderBottom="1px solid"
      borderColor="main_light"
      fontFamily="rale">
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Heading size="md" fontWeight={500} color="main_color_2" cursor="pointer">
            Tour
            <chakra.span fontSize="4xl" fontWeight={100} pos="relative" top="8px">
              ¤
            </chakra.span>
            Tale
          </Heading>
        </Link>
        <Flex gap="30px" alignItems="center" sx={{ '& a': { fontSize: 'sm', fontWeight: '900' } }} flexWrap="wrap">
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
          <Button borderRadius={5} colorScheme="none" bg="main_color_2" color="main_light" _hover={{ opacity: 0.5 }}>
            Sign up
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
