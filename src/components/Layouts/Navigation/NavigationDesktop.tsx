import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'

import Link from 'next/link'
import { MdArrowForward, MdNavigateNext } from 'react-icons/md'
import { useRouter } from 'next/router'
import NavigationLink from './NavigationLink'
import { NavigationComponentProps } from './types'

export function NavigationDesktop({ links }: NavigationComponentProps) {
  const [scrolledDown, setScrolledDown] = useState(false)
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const { pathname } = useRouter()
  const currentLinkItem = links.find((link) => link.link === pathname)!
  const isImageIntersecting = currentLinkItem?.hasImageIntersecting && !scrolledDown
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
      py="20px"
      color={isImageIntersecting ? 'color_light' : 'color_dark'}
      bg={scrolledDown ? 'white' : 'transparent'}
      fontFamily="rale"
      pos="fixed"
      w="100%"
      zIndex="homeNavigation"
      sx={{ '.logo': { h: '40px' } }}>
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Image src={'/assets/logo/TourLeek.svg'} alt="logo" className="logo" w="150px" />
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
      </Container>
    </Box>
  )
}
