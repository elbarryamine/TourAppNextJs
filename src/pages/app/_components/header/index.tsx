import React from 'react'
import {
  Flex,
  Text,
  InputGroup,
  Input,
  GridItem,
  Avatar,
  InputLeftElement,
  Box,
  useColorMode,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { FilledNotification, Search, Sun, HalfMoon } from '../icons'
import { Link } from 'react-router-dom'
import { LinkTo } from 'utils/linkTo'
export function TopHeader() {
  const { colorMode, toggleColorMode } = useColorMode()
  const BG = useColorModeValue('light.bg', 'dark.bg')
  const BG_2 = useColorModeValue('light.bg2', 'dark.bg2')
  const text = useColorModeValue('light.text1', 'dark.text1')
  const subtext = useColorModeValue('light.text2', 'dark.text2')
  return (
    <GridItem bg={BG} gridColumn="1/-1" gridRow="1/2">
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
            bg={BG_2}
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
            <FilledNotification />
          </Box>
          <Avatar cursor="pointer" name="Christian Nwamba" size="sm" src="https://bit.ly/code-beast" />
        </Flex>
      </Flex>
    </GridItem>
  )
}
