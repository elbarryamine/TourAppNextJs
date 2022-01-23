import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { SideNavigation } from '../_components/navigation'
import { MainHeader } from '../_components/header'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}
export function DashboardProvider({ children }: Props) {
  return (
    <BrowserRouter basename="/app">
      <Box bg="gray.300" h="100vh" w="100vw" pos="relative">
        <Flex w="100%" h="100%" maxW="1440px" mx="auto" maxH="1000px" pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
          <SideNavigation />
          <Flex h="100%" w="100%" color="black">
            <Flex flexDir="column" flex="3" px="30px" shadow="md" bg="light">
              <MainHeader />
              <Box
                flex="1"
                // overflowY="scroll"
                maxH="100%">
                {children}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </BrowserRouter>
  )
}
