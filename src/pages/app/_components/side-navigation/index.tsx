import React from 'react'
import { GridItem, Flex, Box, Text, Button } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { FaClone, FaMoneyBillAlt, FaShuttleVan, FaUsers, FaMailBulk } from 'react-icons/fa'
import { LinkTo } from 'utils/link'
import { Link, useLocation } from 'react-router-dom'
import Router from 'next/router'
type SideLink = {
  icon: JSX.Element
  title: string
  url: string
}
const links: Array<SideLink> = [
  { icon: <FaClone size="14px" />, title: 'Dashboard', url: LinkTo.home },
  { icon: <FaMoneyBillAlt size="14px" />, title: 'Sales', url: LinkTo.sales },
  { icon: <FaShuttleVan size="14px" />, title: 'Tours', url: LinkTo.tours },
  { icon: <FaUsers size="14px" />, title: 'Clients', url: LinkTo.clients },
  { icon: <FaMailBulk size="14px" />, title: 'Mail', url: LinkTo.mail },
]
const NavigationSideBorder = ({ active }: { active: number }) => {
  const { primary } = useChakraTheme()

  return (
    <Box
      bg={primary}
      transition={`all 0.5s`}
      transform={`translateY(${active * 100}%)`}
      h={`${100 / links.length}%`}
      w="4px"
      borderRadius="100px"
      pos="absolute"
      top="0"
      left="0"
      zIndex="1"
    />
  )
}
export function SideNavigation() {
  const { background, text, accenttext } = useChakraTheme()
  const { pathname } = useLocation()
  const startingActiveIndex = links.findIndex((link) => pathname.startsWith(link.url))
  const [active, setActive] = React.useState<number>(startingActiveIndex !== -1 ? startingActiveIndex : 0)
  function handleLogout() {
    localStorage.removeItem('token')
    Router.push(LinkTo.login)
  }
  return (
    <GridItem bg={background} gridColumn="1/1" gridRow="2/-1">
      <Flex
        flexDir="column"
        justify="flex-start"
        pt="20px"
        h="100%"
        sx={{
          '& button': {
            d: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: text,
            '& svg path': {
              fill: text,
            },
          },
          '& button:hover': {
            bg: 'transparent',
            color: text,
            '& svg path': {
              fill: text,
            },
          },
        }}>
        <Box
          pos="relative"
          sx={{
            '.menuItem:hover': {
              bg: accenttext,
            },
          }}>
          <NavigationSideBorder active={active} />
          {links.map((link: SideLink, index: number) => {
            return (
              <Link to={link.url} key={index} onClick={() => setActive(index)}>
                <Flex py="10px" w="80px" flexDir="column" className="menuItem" justify="center" align="center">
                  <Button bg="" _focus={{}}>
                    {link.icon}
                  </Button>
                  <Text w="100" textAlign="center" fontSize="sub" fontWeight="extrabold">
                    {link.title}
                  </Text>
                </Flex>
              </Link>
            )
          })}
        </Box>
        <Button bg="transparent" _focus={{}} mt="auto" mb="50px" onClick={handleLogout}>
          <Text w="100" color="misc.red" textAlign="center" fontSize="sub" fontWeight="extrabold">
            Logout
          </Text>
        </Button>
      </Flex>
    </GridItem>
  )
}
