import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'

import Link from 'next/link'
import { LinkWithIcon, NavigationComponentProps } from '.'
import { MdArrowForward, MdNavigateNext } from 'react-icons/md'

export function NavigationDesktop({ dark, icons }: NavigationComponentProps) {
  const iconsArr = [...icons]
  const [navbar, setNavbar] = useState(false)
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  if (dark) iconsArr.shift()

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
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
      h={dark ? '100px' : '70px'}
      color={dark ? 'white' : 'color_dark'}
      bg={navbar ? 'white' : 'transparent'}
      fontFamily="rale"
      pos="fixed"
      w="100%"
      zIndex="homeNavigation"
      sx={{ '.logo': { h: '40px' } }}>
      <Container d="flex" maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Image src={dark ? '/assets/logo/logo-dark.svg' : '/assets/logo/TourLeek.svg'} alt="logo" className="logo" w="150px" />
        </Link>
        <Flex gap="30px" alignItems="center" flexWrap="wrap">
          {iconsArr.map((el) => (
            <LinkWithIcon key={el.name} item={el} />
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
                <Icon as={isHovering ? MdArrowForward : MdNavigateNext} w={6} h={6} />
              </Flex>
            </Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
