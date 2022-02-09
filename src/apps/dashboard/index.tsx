import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './features/routes/home'
import { ToursPage } from './features/routes/tours'
import { ToursWorkSpaceCreate } from './features/routes/tours/create'
import { LinkTo } from '../../utils/linkTo'
import { DashboardProvider } from './provider'

export default function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursPage /> },
    { path: LinkTo.toursCreate, element: <ToursWorkSpaceCreate /> },
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