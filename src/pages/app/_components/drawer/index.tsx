import React, { Fragment } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  Avatar,
  Flex,
} from '@chakra-ui/react'
import { useChakraTheme } from 'config/theme/usetheme'
import { FaBell } from 'react-icons/fa'

type Props = {
  isOpen: boolean
  closeDrawer: () => void
}
type NotificationProps = {
  avatar: string
  sender: string
  date: string
  content: string
  number: number
}
export function NotificationDrawer({ isOpen, closeDrawer }: Props) {
  const { subBackground, text } = useChakraTheme()
  const notifications: NotificationProps[] = [
    {
      avatar: 'https://bit.ly/sage-adebayo',
      sender: 'Segun Adebayo',
      date: 'Today 14:24 am',
      content: 'Hi, What should we do about the bike tour do you think we can add it ?',
      number: 5,
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      sender: 'Kent Dodds',
      date: 'Today 12:50 am',
      content: 'Hey, great work today thanks to you we got lot of sales on quad tour 🥰',
      number: 1,
    },
    {
      avatar: 'https://bit.ly/ryan-florence',
      sender: 'Ryan Florence',
      date: 'Yesterday 7:44 pm',
      content: 'He agreed to meet with us on friday',
      number: 1,
    },
    {
      avatar: 'https://bit.ly/prosper-baba',
      sender: 'Prosper Otemuyiwa',
      date: 'Yesterday 5:40 pm',
      content: 'We need better photos to make the tour look more friendly here is the link tour.com/tours/Quad-Bike-Marrakech/upload',
      number: 2,
    },
  ]

  return (
    <Fragment>
      <Drawer isOpen={isOpen} placement="right" onClose={closeDrawer} size="sm">
        <DrawerOverlay />
        <DrawerContent bg={subBackground}>
          <DrawerCloseButton color={text} _focus={{}} _active={{}} _hover={{}} onClick={closeDrawer} />
          <DrawerHeader>
            <Text fontWeight="extrabold" color={text}>
              Notifications
            </Text>
          </DrawerHeader>
          <DrawerBody p="10px">
            {notifications.map((props: NotificationProps, i) => (
              <Notification key={i} {...props} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  )
}

function Notification({ avatar, sender, date, content, number }: NotificationProps) {
  const { background, subBackground, text, subtext } = useChakraTheme()
  return (
    <Flex flexDir="column" gap="15px" borderRadius="5px" w="100%" bg={background} shadow="xl" p="10px" my="8px" pos="relative">
      <Box pos="absolute" top="-1" right="-5px"></Box>
      <Flex justify="space-between" align="center" w="100%">
        <Flex gap="8px" align="center">
          <Avatar cursor="pointer" name="Christian Nwamba" size="sm" src={avatar} />
          <Flex align="center" gap="8px">
            <Box cursor="pointer" pos="relative">
              <Flex
                pos="absolute"
                top="-7px"
                right="-5px"
                align="center"
                justify="center"
                bg="backgroundPrimary"
                w="15px"
                h="15px"
                overflow="hidden"
                borderRadius="50%">
                <Flex align="center" justify="center" bg={subBackground} w="100%" h="100%">
                  <Text fontWeight="extrabold" color={text}>
                    {number}
                  </Text>
                </Flex>
              </Flex>
              <FaBell size="14px" />
            </Box>
            <Text fontWeight="extrabold" fontSize="2" color={text}>
              {sender}
            </Text>
          </Flex>
        </Flex>
        <Box fontSize="1" color={subtext} w="30%" textAlign="end">
          <Box fontWeight="extrabold">{date.split(' ')[0]}</Box>
          <Text fontWeight="extrabold">{date.replace(date.split(' ')[0], '')}</Text>
        </Box>
      </Flex>
      <Box>
        <Text color={text} fontWeight="extrabold" fontSize="2">
          {content}
        </Text>
      </Box>
    </Flex>
  )
}
