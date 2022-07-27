import React, { useState } from 'react'
import { Divider, Flex, Text, Icon, Button, Input, Container, Box } from '@chakra-ui/react'
import { MdSearch, MdOutlinePlace, MdKeyboardArrowDown, MdOutlineEventAvailable } from 'react-icons/md'

export default function SearchBar() {
  const [, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <Container float="left" maxW="55%" mt="30px">
      <Flex align="center" justifyContent="space-between" bg="white" px="20px" py="10px" borderRadius="50px">
        <Flex align="center">
          <Icon as={MdOutlinePlace} w={6} h={6} color="color_2" mr="16px" />
          <Box>
            <Text color="color_grey_4" fontWeight="400" display="flex" align="center">
              Location
              <Icon as={MdKeyboardArrowDown} w={6} h={6} color="color_1" />
            </Text>
            <Input
              color="color_dark_blue"
              fontWeight="500"
              size="sm"
              border="0"
              px="0"
              _focus={{}}
              _active={{}}
              fontSize="16px"
              _placeholder={{ fontSize: '16px', color: 'color_dark_blue' }}
              placeholder="Select by tour location"
            />
          </Box>
        </Flex>

        <Divider orientation="vertical" h="25px" borderWidth="1px" color="color_grey_4" />
        <Flex align="center">
          <Icon as={MdOutlineEventAvailable} w={6} h={6} color="color_2" mr="16px" />
          <Box>
            <Text color="color_grey_4" fontWeight="400" display="flex" align="center">
              Date
              <Icon as={MdKeyboardArrowDown} w={6} h={6} color="color_1" />
            </Text>
            <Input
              color="color_dark_blue"
              fontWeight="500"
              fontSize="16px"
              size="sm"
              border="0"
              px="0"
              _focus={{}}
              _active={{}}
              _placeholder={{ fontSize: '16px', color: 'red' }}
              type="date"
            />
          </Box>
        </Flex>

        <Button
          borderRadius="50%"
          w="50px"
          h="50px"
          colorScheme="none"
          bg="color_1"
          color="color_light"
          _hover={{ bg: 'color_1_hover' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Icon as={MdSearch} w={6} h={6} />
        </Button>
      </Flex>
    </Container>
  )
}
