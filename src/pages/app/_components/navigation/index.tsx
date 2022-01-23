import React from 'react'
import { GridItem, Flex, Text, Button } from '@chakra-ui/react'
import { useChakraTheme } from 'config/theme/usetheme'
import { HomeOuline } from '../icons'
export function Navigation() {
  const { background, subtext, text, accent } = useChakraTheme()

  return (
    <GridItem bg={background} gridColumn="1/1" gridRow="2/-1">
      <Flex
        flexDir="column"
        justify="flex-start"
        pt="20px"
        h="100%"
        sx={{
          '& button': {
            py: '30px',
            px: '0',
            d: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '10px',
            pl: '30px',
            borderRadius: '0',
            color: subtext,
            '& svg path': {
              fill: subtext,
            },
          },
          '& button:hover': {
            bg: 'transparent',
            color: text,
            '& svg path': {
              fill: text,
            },
          },
          '& button p': {
            fontSize: 'md',
            fontWeight: '800',
          },
        }}>
        <Button bg="transparent" _focus={{}}>
          <HomeOuline />
          <Text>Home</Text>
        </Button>
        <Button bg="transparent" _focus={{}}>
          <Text>Sales</Text>
        </Button>
        <Button bg="transparent" _focus={{}}>
          <Text>Services</Text>
        </Button>
        <Button bg="transparent" _focus={{}}>
          <Text>Clients</Text>
        </Button>
        <Button bg="transparent" _focus={{}}>
          <Text>Contacts</Text>
        </Button>
        <Button bg="transparent" _focus={{}} mt="auto" mb="50px">
          <Text>Logout</Text>
        </Button>
      </Flex>
    </GridItem>
  )
}
