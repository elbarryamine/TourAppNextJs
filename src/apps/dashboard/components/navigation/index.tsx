import React from 'react'
import { GridItem, Flex, Box, Text, Button } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaClone, FaMoneyBillAlt, FaShuttleVan, FaUsers, FaMailBulk } from 'react-icons/fa'
import { LinkTo } from 'utils/linkTo'
import { Link, useLocation } from 'react-router-dom'
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
export function Navigation() {
  const { background, text, primary } = useChakraTheme()
  const { pathname } = useLocation()
  const startingActiveIndex = links.findIndex((link) => pathname.startsWith(link.url))
  const [active, setActive] = React.useState<number>(startingActiveIndex)

  return (
    <GridItem bg={background} gridColumn="1/1" gridRow="2/-1">
      <Flex
        flexDir="column"
        justify="flex-start"
        pt="20px"
        h="100%"
        sx={{
          '& button': {
            py: '24px',
            px: '0',
            d: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '10px',
            pl: '30px',
            borderRadius: '0',
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
        <Box pos="relative">
          {links.map((link: SideLink, index: number) => {
            return (
              <Link to={link.url} key={index} onClick={() => setActive(index)}>
                <Button bg="transparent" _focus={{}}>
                  {link.icon}
                  <Text fontSize="sub" fontWeight="extrabold">
                    {link.title}
                  </Text>
                </Button>
              </Link>
            )
          })}
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
          />
        </Box>
        <Button bg="transparent" _focus={{}} mt="auto" mb="50px">
          <Text>Logout</Text>
        </Button>
      </Flex>
    </GridItem>
  )
}
