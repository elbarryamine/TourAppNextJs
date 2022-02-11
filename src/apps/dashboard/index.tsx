import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './features/routes/home'
import { ToursPage } from './features/routes/tours'
import { ToursCreate } from './features/routes/tours/create'
import { LinkTo } from '../../utils/linkTo'
import { DashboardProvider } from './provider'

export default function App() {
  const routes = [
    { path: LinkTo.root, element: <Navigate to={LinkTo.home} /> },
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursPage /> },
    { path: LinkTo.toursCreate, element: <ToursCreate /> },
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
