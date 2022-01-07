import React, { ReactChild } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { SideNavigation } from './_components/navigation'
import { Home } from './_features/routes/home'
import { ToursWorkSpace } from './_features/routes/tours-workspace'
import { ToursWorkSpaceCreate } from './_features/routes/tours-workspace/create'

function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/tours-workspace', element: <ToursWorkSpace /> },
    { path: '/tours-workspace/create', element: <ToursWorkSpaceCreate /> },
  ]
  return (
    <Box bg="light" h="100vh" w="100vw">
      <SideNavigation />
      <Box h="100%" w="100%">
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </Box>
  )
}

export default function Root() {
  return (
    <BrowserRouter basename="/app/root">
      <App />
    </BrowserRouter>
  )
}
