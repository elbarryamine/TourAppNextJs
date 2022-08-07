import React, { useEffect, useState } from 'react'

import { Box, Button, Container, Flex, HStack, Icon, Text } from '@chakra-ui/react'

import Link from 'next/link'

import { MdArrowForward, MdNavigateNext } from 'react-icons/md'

import { useRouter } from 'next/router'

import NavigationLink from './NavigationLink'

import { NavigationComponentProps } from './types'

import Image from 'next/image'

export function NavigationDesktop({ links }: NavigationComponentProps) {
  const [scrolledDown, setScrolledDown] = useState(false)
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const { pathname } = useRouter()
  const currentLinkItem = links.find((link) => link.link === pathname)!
  const isImageIntersecting = (currentLinkItem?.hasImageIntersecting && !scrolledDown) || (pathname === '/browse' && !scrolledDown)
  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setScrolledDown(true)
    } else {
      setScrolledDown(false)
    }
  }
  useEffect(() => {
    changeNavbarBackground()

    window.addEventListener('scroll', changeNavbarBackground)
    return () => window.removeEventListener('scroll', changeNavbarBackground)
  })

  return (
    <Box
      as="nav"
      color={isImageIntersecting ? 'color_light' : 'color_dark'}
      bg={scrolledDown ? 'white' : 'transparent'}
      fontFamily="rale"
      pos="fixed"
      w="100%"
      zIndex="homeNavigation">
      <Container maxW="container.xl">
        <HStack justify="space-between">
          <Link href="/">
            <Box pos="relative" w="150px" h="60px">
              <Image src={isImageIntersecting ? '/assets/logo/Logo-dark.svg' : '/assets/logo/Logo-light.svg'} alt="logo" layout="fill" />
            </Box>
          </Link>
          <Flex gap="30px" alignItems="center" flexWrap="wrap">
            {links.map((el) => (
              <NavigationLink key={el.name} item={el} isImageIntersecting={isImageIntersecting} />
            ))}

            <Button
              borderRadius={5}
              colorScheme="none"
              bg="color_1"
              color="color_light"
              _hover={{ bg: 'color_1_hover' }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <Link href="/login">
                <Flex align="center">
                  <Text>Sign in</Text>
                  <Icon as={isHovering ? MdArrowForward : MdNavigateNext} w="1.5em" h="1.5em" />
                </Flex>
              </Link>
            </Button>
          </Flex>
        </HStack>
      </Container>
    </Box>
  )
}
