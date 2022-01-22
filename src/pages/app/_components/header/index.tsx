import React from 'react'
import { Text, Heading, Flex, Input, InputGroup, InputRightElement, Avatar, Box } from '@chakra-ui/react'
import { AiFillCalendar, AiFillBell, AiOutlineSearch } from 'react-icons/ai'

export function MainHeader() {
  return (
    <Flex name="header" w="100%" mb="30px" py="30px" align="center" justify="space-between">
      <Flex flexDir="column">
        <Heading fontWeight="extrabold" fontSize="4xl">
          Dashboard
        </Heading>
        <Text fontWeight="extrabold" color="subtext" fontSize="sm">
          Manage your tours and much more ...
        </Text>
      </Flex>
      <InputGroup maxW="400px" sx={{ '.icon': { transition: 'all 0.5s' } }}>
        <Input
          placeholder="Search dashboard ..."
          shadow="md"
          _placeholder={{ '&': { color: 'subtext' } }}
          _focus={{ '& + div': { color: 'subtextdarker' } }}
          borderRadius="15px"
          bg="light"
          border="1px solid"
          borderColor="subtext"
        />
        <InputRightElement color="subtext">
          <AiOutlineSearch className="icon" size="20px" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export function SideSettings() {
  return (
    <Box flex="1" shadow="dark-lg" px="30px" bg="darker" borderRadius="15px">
      <Flex name="sidesettings" w="100%" mb="30px" py="30px" align="center" justify="end">
        <Flex flexDir="row" align="center" gap="10px" color="light">
          <AiFillBell size="20px" />
          <AiFillCalendar size="20px" />
          <Avatar ml="20px" src="https://bit.ly/dan-abramov" w="40px" h="40px" shadow="base" />
        </Flex>
      </Flex>
    </Box>
  )
}
