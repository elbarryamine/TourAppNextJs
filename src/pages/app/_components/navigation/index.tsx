import React from 'react'
import { GridItem, Flex, Box, Text, Button } from '@chakra-ui/react'
import { useChakraTheme } from 'config/theme/usetheme'
import { HomeOuline, MoneyIcon } from '../icons'

type SideLink = {
  icon: JSX.Element
  title: string
}
const links: Array<SideLink> = [
  { icon: <HomeOuline height={14} width={14} />, title: 'Home' },
  { icon: <MoneyIcon height={14} width={14} />, title: 'Sales' },
  { icon: <HomeOuline height={14} width={14} />, title: 'Services' },
  { icon: <HomeOuline height={14} width={14} />, title: 'Clients' },
  { icon: <HomeOuline height={14} width={14} />, title: 'Contacts' },
]
export function Navigation() {
  const { background, subtext, text, primary } = useChakraTheme()
  const [active, setActive] = React.useState<number>(0)

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
              <Button key={index} bg="transparent" _focus={{}} onClick={() => setActive(index)}>
                {link.icon}
                <Text fontSize="1" fontWeight="extrabold">
                  {link.title}
                </Text>
              </Button>
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
