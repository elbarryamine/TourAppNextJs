import React from 'react'
import {
  Box,
  Button,
  Flex,
  Image,
  Icon,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineUserAdd } from 'react-icons/ai'
import { LinkWithIcon, NavigationComponentProps } from '.'

export function NavigationMobile({ dark, icons }: NavigationComponentProps) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const iconsArr = [...icons]
  if (dark) iconsArr.shift()
  return (
    <Box
      as="nav"
      h={dark ? '100px' : '70px'}
      color={dark ? 'white' : 'color_dark'}
      bg={dark ? 'color_dark' : 'color_light'}
      fontFamily="rale"
      pos="sticky"
      top="0px"
      left="0px"
      zIndex="homeNavigation"
      sx={{ '.logo': { h: '40px' } }}>
      <Flex align="center" justify="space-between" h="100%" px="20px" pos="sticky">
        <Link href="/" passHref>
          <Image src={dark ? '/assets/logo/logo-dark.svg' : '/assets/logo/logo.svg'} alt="logo" className="logo" />
        </Link>
        <Button __css={{}} onClick={onOpen}>
          <Icon as={AiOutlineMenu} fontSize="30px" />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <Box zIndex="drawer" pos="absolute">
            <DrawerContent bg={dark ? 'color_dark' : 'color_light'} color={dark ? 'color_light' : 'color_dark'}>
              <DrawerCloseButton _focus={{}} _active={{}} _hover={{}} onClick={onClose} />
              <DrawerHeader>
                <Link href="/" passHref>
                  <Image src={dark ? '/assets/logo/logo-dark.svg' : '/assets/logo/logo.svg'} alt="logo" className="logo" h="25px" />
                </Link>
              </DrawerHeader>
              <DrawerBody pt="50px">
                <Stack spacing={5}>
                  {iconsArr.map((el) => (
                    <LinkWithIcon key={el.name} item={el} />
                  ))}
                  <Button borderRadius={5} colorScheme="none" bg="color_1" color="color_light" _hover={{ opacity: 0.5 }}>
                    <LinkWithIcon item={{ link: '/signup', icon: AiOutlineUserAdd, name: 'Sign up' }} />
                  </Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Box>
        </Drawer>
      </Flex>
    </Box>
  )
}
