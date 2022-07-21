import { Container, Flex, Grid, Stack, Image, Heading } from '@chakra-ui/react'
import { Subscribe } from 'components/subscribe'
import { useResponsive } from 'common/hooks/useResponsive'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { mainLinks } from 'common/utils/link'

export function Footer() {
  const { lessthan1000, lessthan768, lessthan600 } = useResponsive()
  const { pathname } = useRouter()
  const isHomePage = pathname == mainLinks.homeRoot || pathname === mainLinks.home
  return (
    <Flex
      w="100%"
      bgColor={isHomePage ? 'color_1' : 'color_light'}
      bgSize="cover"
      bgRepeat="no-repeat"
      as="footer"
      color={isHomePage ? 'color_light' : 'color_1'}
      mt="auto">
      <Container maxW="1440px" pt="50px" px={lessthan600 ? '20px' : '50px'}>
        <Stack spacing={10} h="100%" pb="200px" pos="relative">
          <Flex gap="20px" align="center" justify="space-between" flexDir={lessthan600 ? 'column' : 'row'}>
            <Grid
              flex={lessthan1000 ? '0 0 40%' : '0 0 55%'}
              rowGap="50px"
              templateColumns={lessthan1000 ? (lessthan768 ? '1fr' : 'repeat(2,1fr)') : 'repeat(3,1fr)'}
              sx={{
                '& a': { color: isHomePage ? 'whitesmoke' : 'color_grey_1', fontWeight: 100, fontSize: 'sm', textDecor: 'underline' },
              }}>
              <Stack>
                <Heading size="md" fontWeight={300}>
                  Explore
                </Heading>
                <Link href="/">Home</Link>
                <Link href="/">Search</Link>
                <Link href="/">WhishList</Link>
                <Link href="/">Bookings</Link>
                <Link href="/">About</Link>
              </Stack>
              <Stack>
                <Heading size="md" fontWeight={300}>
                  Authentification
                </Heading>
                <Link href="/">Sign in</Link>
                <Link href="/">Create Account</Link>
              </Stack>
              <Stack>
                <Heading size="md" fontWeight={300}>
                  Get in touch
                </Heading>
                <Link href="/">Contact</Link>
              </Stack>
            </Grid>
            <Subscribe border="0" />
          </Flex>
          <Flex
            justify={lessthan768 ? 'center' : 'space-between'}
            align="center"
            w="100%"
            pos="absolute"
            bottom="0"
            py="20px"
            flexDir={lessthan768 ? 'column' : 'row'}>
            <Link href="/" passHref>
              <Image
                src={isHomePage ? '/assets/logo/logo-inverted.svg' : '/assets/logo/logo.svg'}
                alt="logo"
                h={lessthan1000 ? '45px' : '90px'}
              />
            </Link>
            <Flex gap={lessthan1000 ? '5px' : '30px'} align="center" flexWrap="wrap">
              <Link href={mainLinks.privacy} passHref>
                Privacy policy
              </Link>
              <Link href={mainLinks.terms} passHref>
                Terms of service
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  )
}
