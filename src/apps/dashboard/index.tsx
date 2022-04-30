import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LinkTo } from 'utils/link'
import { DashboardProvider } from './provider'
import { toursRoutes } from './features/tours/routes'
import { homeRoutes } from './features/home/routes'

export default function App() {
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
