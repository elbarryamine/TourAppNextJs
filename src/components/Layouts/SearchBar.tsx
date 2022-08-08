import React from 'react'
import { Divider, Flex, Text, Icon, Button, Input, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'

export default function SearchBar() {
  return (
    <Flex
      gap="20px"
      align="center"
      bg="white"
      px="40px"
      py="10px"
      borderRadius="500px"
      fontSize="sm"
      fontWeight={900}
      border="1px solid whitesmoke">
      <Flex flexDir="column" alignSelf="stretch" justify="space-between" flex="0 0 calc(100% / 4 - 4px - 50px)">
        <Text>Name</Text>
        <Input
          fontWeight={400}
          border="0"
          px="0"
          _focus={{}}
          _active={{}}
          _placeholder={{ fontSize: 'sm', color: 'color_grey_2' }}
          placeholder="Search for a tour"
        />
      </Flex>
      <Divider orientation="vertical" h="50px" />
      <Flex flexDir="column" alignSelf="stretch" justify="space-between" flex="0 0 calc(100% / 4 - 4px - 50px)">
        <Text>Location</Text>
        <Input
          fontWeight={400}
          border="0"
          px="0"
          _focus={{}}
          _active={{}}
          _placeholder={{ fontSize: 'sm', color: 'color_grey_2' }}
          placeholder="Select by tour location"
        />
      </Flex>
      <Divider orientation="vertical" h="50px" />
      <Flex flexDir="column" alignSelf="stretch" justify="space-between" flex="0 0 calc(100% / 4 - 4px - 50px)">
        <Text>Rating</Text>
        <Menu>
          <MenuButton
            as={Button}
            bg="none"
            _hover={{}}
            _focus={{}}
            _active={{}}
            fontWeight={400}
            fontSize="sm"
            px="0"
            color="color_grey_2"
            rightIcon={<Icon fontSize="xs" as={AiOutlineDown} />}>
            <Text>Select by tour rating</Text>
          </MenuButton>
          <MenuList>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
            <MenuItem>4</MenuItem>
            <MenuItem>5</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Divider orientation="vertical" h="50px" />
      <Flex flexDir="column" alignSelf="stretch" justify="space-between" flex="0 0 calc(100% / 4 - 54px)">
        <Text>Date</Text>
        <Input
          color="color_grey_2"
          fontWeight={400}
          border="0"
          px="0"
          _focus={{}}
          _active={{}}
          _placeholder={{ fontSize: 'sm' }}
          type="date"
        />
      </Flex>
      <Divider orientation="vertical" h="50px" />
      <Button borderRadius="50%" w="50px" h="50px" bg="color_1" color="color_light">
        <Icon as={AiOutlineSearch} fontSize="xl" />
      </Button>
    </Flex>
  )
}
