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
          shadow="sm"
          _placeholder={{ '&': { color: 'darker', fontSize: 'xs' } }}
          _focus={{ '& + div': { color: 'darker' }, '&': { border: '1px solid', borderColor: 'secondary' } }}
          boxShadow="2xl"
          borderRadius="15px"
          h="40px"
        />
        <InputRightElement color="subtext" h="100%">
          <AiOutlineSearch className="icon" size="20px" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
