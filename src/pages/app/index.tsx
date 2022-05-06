import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LinkTo } from 'utils/link'
import { DashboardProvider } from '../../pages/app/_provider'
import { toursRoutes } from './_features/tours/routes'
import { homeRoutes } from '../../pages/app/_features/home/routes'
import { ChakraProvider } from '@chakra-ui/react'
import { dashboardTheme } from 'config/theme'

export default function App() {
  return (
    <ChakraProvider theme={dashboardTheme}>
      <Main />
    </ChakraProvider>
  )
}

export function Main() {
  const routes = [
    { path: LinkTo.root, element: <Navigate to={LinkTo.home} /> },
    ...homeRoutes,
    ...toursRoutes,
    { path: '*', element: <Navigate to={LinkTo.home} /> },
  ]

  return (
    <DashboardProvider>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </DashboardProvider>
  )
}
