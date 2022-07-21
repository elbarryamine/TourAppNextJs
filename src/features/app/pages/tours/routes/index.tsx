import React from 'react'
import { CreateTourPage } from './createtourpage'
import { ToursPage } from './tourpage'
import { dashboardLinks } from 'common/utils/link'

export const toursRoutes = [
  { path: dashboardLinks.tours, element: <ToursPage /> },
  { path: dashboardLinks.createtour, element: <CreateTourPage /> },
]
