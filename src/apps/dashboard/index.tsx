import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LinkTo } from '../../utils/link'
import { DashboardProvider } from './provider'
import { Home } from './features/home/routes/home'
import { ToursPage } from './features/tours/routes/tourpage'
import { CreateTourPage } from './features/tours/routes/createtourpage'

export default function App() {
  const routes = [
    { path: LinkTo.root, element: <Navigate to={LinkTo.home} /> },
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursPage /> },
    { path: LinkTo.createtour, element: <CreateTourPage /> },
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
