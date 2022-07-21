import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { dashboardLinks } from 'common/utils/link'
import { DashboardProvider } from './provider'
import { toursRoutes } from './pages/tours/routes'
import { homeRoutes } from './pages/home/routes'
import { ChakraProvider } from '@chakra-ui/react'
import { dashboardTheme } from 'common/utils/theme'

export default function App() {
  return (
    <ChakraProvider theme={dashboardTheme}>
      <Main />
    </ChakraProvider>
  )
}

export function Main() {
  const routes = [
    { path: dashboardLinks.root, element: <Navigate to={dashboardLinks.home} /> },
    ...homeRoutes,
    ...toursRoutes,
    { path: '*', element: <Navigate to={dashboardLinks.home} /> },
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
