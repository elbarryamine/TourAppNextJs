import React from 'react'
import { CreateTourPage } from './createtourpage'
import { ToursPage } from './tourpage'
import { LinkTo } from 'utils/link'

export const toursRoutes = [
  { path: LinkTo.tours, element: <ToursPage /> },
  { path: LinkTo.createtour, element: <CreateTourPage /> },
]
