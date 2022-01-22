import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './_features/routes/home'
import { ToursWorkSpace } from './_features/routes/tours-workspace'
import { ToursWorkSpaceCreate } from './_features/routes/tours-workspace/create'
import { LinkTo } from '../../utils/linkTo'
import { DashboardProvider } from './_provider'

export default function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursWorkSpace /> },
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
