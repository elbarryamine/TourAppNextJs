import React, { ReactChild } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import { SideNavigation } from './_components/navigation'
import { Home } from './_features/routes/home'
import { ToursWorkSpace } from './_features/routes/tours-workspace'
import { ToursWorkSpaceCreate } from './_features/routes/tours-workspace/create'
import { LinkTo } from '../../utils/linkTo'
import { MainHeader, SideHeader } from './_components/header'

function App() {
  const routes = [
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursWorkSpace /> },
    { path: LinkTo.toursCreate, element: <ToursWorkSpaceCreate /> },
  ]
  return (
    <Flex bg="gray.50" h="100vh" w="100vw" p="10px">
      <SideNavigation />
      <Flex h="100%" w="100%" color="black" gap="5px">
        <Box flex="3" bg="light" px="30px" borderRadius="15px">
          <MainHeader />
          <Box>
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Box>
        </Box>
        <Box flex="1" px="30px" bg="darker" borderRadius="15px">
          <SideHeader />
        </Box>
      </Flex>
    </Flex>
  )
}

export default function Root() {
  return (
    <BrowserRouter basename="/app">
      <App />
    </BrowserRouter>
  )
}
