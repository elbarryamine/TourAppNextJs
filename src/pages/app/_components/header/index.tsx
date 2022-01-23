import React from 'react'
import {
  Text,
  Heading,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  // Drawer,
  // DrawerBody,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // Button,
  // useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

export function MainHeader() {
  const [
    // xss,
    xs,
    sm,
    md,
    // lg,
  ] = useMediaQuery([
    // '(max-width: 400px)',
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(max-width: 1024px)',
    // '(max-width: 1200px)',
  ])
  return (
    <Flex
      name="header"
      w="100%"
      mb="30px"
      py="30px"
      gap={sm ? '30px' : '0'}
      align="center"
      justify="space-between"
      flexDir={xs ? 'column' : 'row'}>
      <Flex flexDir="column">
        <Heading fontWeight="extrabold" fontSize={md ? '4xl' : '5xl'} color="secondary">
          Dashboard
        </Heading>
        <Text fontWeight="extrabold" color="subtext" fontSize="sm">
          Manage your tours and much more ...
        </Text>
      </Flex>
      <InputGroup
        maxW={md ? (xs ? '100%' : '250px') : '400px'}
        mr={md ? (xs ? '0' : '30px') : '0px'}
        sx={{ '.icon': { transition: 'all 0.5s' } }}>
        <Input
          placeholder="Search dashboard ..."
          shadow="md"
          _placeholder={{ '&': { color: 'subtext' } }}
          _focus={{ '& + div': { color: 'secondary' } }}
          borderRadius="15px"
          bg="light"
          border="0"
        />
        <InputRightElement color="subtext">
          <AiOutlineSearch className="icon" size="25px" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
