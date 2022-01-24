import React from 'react'
import { Flex, Text, InputGroup, Input, GridItem, Avatar, InputLeftElement, Box, useColorMode, Button } from '@chakra-ui/react'
import { FilledNotification, Search, Sun, HalfMoon } from '../icons'
import { Link } from 'react-router-dom'
import { LinkTo } from 'utils/linkTo'
import { useChakraTheme } from 'config/theme/usetheme'
import { NotificationDrawer } from '..'
export function TopHeader() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { background, subBackground, text, subtext } = useChakraTheme()
  const [isDrawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  function openDrawer() {
    setDrawerOpen(true)
  }
  function closeDrawer() {
    setDrawerOpen(false)
  }
  return (
    <GridItem bg={background} gridColumn="1/-1" gridRow="1/2">
      <Flex h="100%" w="100%" justify="space-between" align="center" px="30px">
        <Link to={LinkTo.root}>
          <Text color={text} fontWeight="extrabold" fontSize="xl" textTransform="capitalize">
            Tour guide dashboard
          </Text>
        </Link>
        <InputGroup maxW="500px">
          <InputLeftElement h="100%" color="accent">
            <Search />
          </InputLeftElement>
          <Input
            borderRadius="15px"
            bg={subBackground}
            color={text}
            border="0"
            _hover={{ '&:hover::placeholder': { color: text } }}
            _focus={{
              ouline: '5px solid',
              oulineColor: 'primary',
            }}
            _placeholder={{ '&': { color: subtext, fontSize: 'sm', fontWeight: 'extrabold' } }}
            placeholder="Search for tools..."
          />
        </InputGroup>
        <Flex h="100%" align="center" gap="27px">
          <Button d="flex" gap="0px" onClick={toggleColorMode} __css={{}}>
            {colorMode === 'dark' ? <Sun /> : <HalfMoon />}
          </Button>
          <Box cursor="pointer" pos="relative">
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
              <Box bg="red" w="6px" h="6px" borderRadius="50%" />
            </Flex>
            <Box cursor="pointer" onClick={openDrawer}>
              <FilledNotification />
            </Box>
            <NotificationDrawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
          </Box>
          <Avatar cursor="pointer" name="Christian Nwamba" size="sm" src="https://bit.ly/code-beast" />
        </Flex>
      </Flex>
    </GridItem>
  )
}
