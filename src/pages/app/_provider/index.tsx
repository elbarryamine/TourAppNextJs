import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { SideNavigation } from '../_components/navigation'
import { MainHeader, SideSettings } from '../_components/header'
import { BrowserRouter } from 'react-router-dom'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}
export function DashboardProvider({ children }: Props) {
  return (
    <BrowserRouter basename="/app">
      <Flex bg="gray.100" h="100vh" w="100vw" p="10px">
        <SideNavigation />
        <Flex h="100%" w="100%" color="black" gap="5px">
          <Flex flexDir="column" flex="3" px="30px" borderRadius="15px" shadow="md" bg="light">
            <MainHeader />
            <Box flex="1">{children}</Box>
          </Flex>
          <SideSettings />
        </Flex>
      </Flex>
    </BrowserRouter>
  )
}
