import React from 'react'
import { Flex, Text, InputGroup, Input, GridItem, Avatar, InputLeftElement, Box, useColorMode, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { LinkTo } from 'utils/link'
import { useChakraTheme } from 'hooks/usetheme'
import { NotificationDrawer } from '..'
import { FaBell, FaMoon, FaSearch, FaSun } from 'react-icons/fa'
export function TopHeader() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { background, subBackground, text, accenttext } = useChakraTheme()
  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  function openDrawer() {
    setDrawerOpen(true)
  }
  function closeDrawer() {
    setDrawerOpen(false)
  }
  return (
    <GridItem bg={background} gridColumn="1/-1" gridRow="1/2" py="20px" borderBottom="1px solid" borderColor={accenttext}>
      <Flex h="100%" w="100%" justify="space-between" align="center" px="50px">
        <Link to={LinkTo.root}>
          <Text color={text} fontWeight="extrabold" fontSize="display" textTransform="capitalize">
            Tour guide dashboard
          </Text>
        </Link>
        <InputGroup maxW="500px" color={text}>
          <InputLeftElement>
            <FaSearch size="14px" />
          </InputLeftElement>
          <Input bg={subBackground} placeholder="Search for tools..." />
        </InputGroup>
        <Flex h="100%" align="center" gap="20px">
          <Button px="4px" d="flex" onClick={toggleColorMode} __css={{}}>
            {colorMode === 'dark' ? <FaSun size="14px" /> : <FaMoon size="14px" />}
          </Button>
          <Button px="4px" d="flex" __css={{}} onClick={openDrawer}>
            <Box pos="relative">
              <Flex
                pos="absolute"
                top="-5px"
                right="-3px"
                align="center"
                justify="center"
                bg="backgroundPrimary"
                w="10px"
                h="10px"
                borderRadius="50%">
                <Box w="6px" h="6px" borderRadius="50%" />
              </Flex>
              <Box>
                <FaBell size="14px" />
              </Box>
            </Box>
            <NotificationDrawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
          </Button>
          <Avatar cursor="pointer" name="Christian Nwamba" size="sm" src="https://bit.ly/code-beast" />
        </Flex>
      </Flex>
    </GridItem>
  )
}
