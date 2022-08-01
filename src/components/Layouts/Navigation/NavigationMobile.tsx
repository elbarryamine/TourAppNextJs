import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdArrowForward, MdNavigateNext } from 'react-icons/md'
import { NavigationComponentProps } from './types'
import NavigationLink from './NavigationLink'
import Image from 'next/image'
import Link from 'next/link'

export function NavigationMobile({ links }: NavigationComponentProps) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <Box
      as="nav"
      color="color_dark"
      bg="color_light"
      fontFamily="rale"
      pos="sticky"
      top="0px"
      left="0px"
      zIndex="homeNavigation"
      sx={{ '.logo': { h: '40px' } }}>
      <Flex align="center" justify="space-between" h="100%" px="20px" pos="sticky">
        <Link href="/">
          <Box pos="relative" w="150px" h="60px">
            <Image src={'/assets/logo/Logo-light.svg'} alt="logo" layout="fill" />
          </Box>
        </Link>
        <Button __css={{}} onClick={onOpen}>
          <Icon as={AiOutlineMenu} fontSize="30px" />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <Box zIndex="drawer" pos="absolute">
            <DrawerContent>
              <DrawerCloseButton _focus={{}} _active={{}} _hover={{}} onClick={onClose} />
              <DrawerHeader>
                <Link href="/">
                  <Box pos="relative" w="150px" h="60px">
                    <Image src={'/assets/logo/Logo-light.svg'} alt="logo" layout="fill" />
                  </Box>
                </Link>
              </DrawerHeader>
              <DrawerBody pt="50px">
                <Stack spacing={5}>
                  {links.map((el) => (
                    <NavigationLink key={el.name} item={el} />
                  ))}

                  <Button
                    borderRadius={5}
                    colorScheme="none"
                    bg="color_1"
                    color="color_light"
                    _hover={{ bg: 'color_1_hover' }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <Link href="/login">
                      <Flex align="center">
                        <Text>Sign in</Text>
                        <Icon as={isHovering ? MdArrowForward : MdNavigateNext} w={6} h={6} />
                      </Flex>
                    </Link>
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
