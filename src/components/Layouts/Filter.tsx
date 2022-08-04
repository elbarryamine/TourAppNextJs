import React, { useRef, useState } from 'react'

import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Icon, Text, Divider, HStack } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { useDraggable } from 'react-use-draggable-scroll'

export default function Filters() {
  const categories = ['All', 'Mountain', 'Hiking', 'Beach', 'Ballon', 'Quad', 'Waterfalls', 'Snow', 'Camel', 'Dune']
  const [active, setActive] = useState<string>(categories[0] as string)

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)

  return (
    <Flex gap="20px" align="center">
      <Menu>
        <MenuButton
          _focus={{}}
          _hover={{}}
          _active={{}}
          border="1px"
          minW="90px"
          borderColor="whitesmoke"
          bg="color_light"
          borderRadius="1000px"
          as={Button}
          rightIcon={<Icon fontSize="xs" as={AiOutlineDown} />}>
          <Text fontSize="sm">Price</Text>
        </MenuButton>
        <MenuList>
          <MenuItem>0-10$</MenuItem>
          <MenuItem>10-20$</MenuItem>
          <MenuItem>20-30$</MenuItem>
          <MenuItem>{`> 30$`}</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          _focus={{}}
          _hover={{}}
          _active={{}}
          border="1px"
          minW="150px"
          borderColor="whitesmoke"
          bg="color_light"
          borderRadius="1000px"
          as={Button}
          rightIcon={<Icon fontSize="xs" as={AiOutlineDown} />}>
          <Text fontSize="sm">Type of place</Text>
        </MenuButton>
        <MenuList>
          <MenuItem>Beach</MenuItem>
          <MenuItem>Waterfall</MenuItem>
          <MenuItem>Desert</MenuItem>
        </MenuList>
      </Menu>
      <Divider orientation="vertical" h="50px" />
      <HStack spacing="20px" overflowX="hidden" {...events} ref={ref}>
        {categories.map((el, index) => (
          <Button
            key={index}
            _focus={{}}
            _hover={{}}
            _active={{}}
            border="1px"
            minW="90px"
            borderColor="whitesmoke"
            bg={active === el ? 'blue.100' : 'color_light'}
            borderRadius="1000px"
            px="12px"
            onClick={() => setActive(el)}>
            <Text fontSize="sm" color={active === el ? 'blue.900' : 'color_dark'}>
              {el}
            </Text>
          </Button>
        ))}
      </HStack>
    </Flex>
  )
}
