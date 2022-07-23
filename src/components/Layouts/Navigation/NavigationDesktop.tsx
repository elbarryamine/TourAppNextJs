import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, Image } from '@chakra-ui/react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Link from 'next/link'
import { LinkWithIcon, NavigationComponentProps } from '.'

export function NavigationDesktop({ dark, icons }: NavigationComponentProps) {
  const iconsArr = [...icons]
  const [navbar, setNavbar] = useState(false)

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
        <Link href="/" passHref>
          <Image src={dark ? '/assets/logo/logo-dark.svg' : '/assets/logo/logo.svg'} alt="logo" className="logo" />
        </Link>
        <Flex gap="30px" alignItems="center" flexWrap="wrap">
          {iconsArr.map((el) => (
            <LinkWithIcon key={el.name} item={el} />
          ))}
          <Button borderRadius={5} colorScheme="none" bg="color_1" color="color_light" _hover={{ opacity: 0.5 }}>
            <LinkWithIcon item={{ link: '/signup', icon: AiOutlineUserAdd, name: 'Sign up' }} />
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
