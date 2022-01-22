import React from 'react'
import {
  Text,
  Heading,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Avatar,
  Box,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { AiFillCalendar, AiFillBell, AiOutlineSearch, AiOutlineAppstore } from 'react-icons/ai'

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

export function SideSettings() {
  const [
    // xss,
    xs,
    sm,
    md,
    lg,
  ] = useMediaQuery([
    // '(max-width: 400px)',
    '(max-width: 600px)',
    '(max-width: 768px)',
    '(max-width: 1024px)',
    '(max-width: 1200px)',
  ])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <>
      {md ? (
        <Box pos="relative">
          <Flex align="center" justify="center" w="50px" h="50px" pos="absolute" top="0" right="0">
            <Button
              ref={btnRef}
              onClick={onOpen}
              transition="all 0.5s"
              _focus={{}}
              _hover={{}}
              _active={{ bg: 'secondary', color: 'white' }}
              bg="none"
              w="max-content"
              px="0">
              <AiOutlineAppstore size="30px" />
            </Button>
          </Flex>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent p="0" bg="none">
              <DrawerCloseButton _focus={{}} _active={{}} color="light" borderRadius="2px" />
              <DrawerBody p="5px">
                <Box h="100%" borderRadius="15px" bg="darker" pt="20px" px={sm ? (xs ? '10px' : '20px') : '30px'}>
                  <SideSettingsContent />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : (
        <Box flex={lg ? '0.8' : '1'} h="100%" shadow="dark-lg" px={lg ? '10px' : '30px'} bg="darker" borderRadius="15px">
          <SideSettingsContent />
        </Box>
      )}
    </>
  )
}

function SideSettingsContent() {
  return (
    <Flex name="sidesettings" w="100%" mb="30px" py="30px" align="center" justify="end">
      <Flex flexDir="row" align="center" gap="10px" color="light">
        <AiFillBell size="20px" />
        <AiFillCalendar size="20px" />
        <Avatar ml="20px" src="https://bit.ly/dan-abramov" w="40px" h="40px" shadow="base" />
      </Flex>
    </Flex>
  )
}
