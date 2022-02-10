import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './features/routes/home'
import { ToursPage } from './features/routes/tours'
import { ToursWorkSpaceCreate } from './features/routes/tours/create'
import { LinkTo } from '../../utils/linkTo'
import { DashboardProvider } from './provider'
import { LoadingPage } from 'components/loading'
import { gql, useLazyQuery } from '@apollo/client'
import Router from 'next/router'

const QUERY = gql`
  query ($token: String!) {
    verifyUser(token: $token)
  }
`
export default function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: LinkTo.home, element: <Home /> },
    { path: LinkTo.tours, element: <ToursPage /> },
    { path: LinkTo.toursCreate, element: <ToursWorkSpaceCreate /> },
  ]
  const [runVerifyQuery, { loading }] = useLazyQuery(QUERY)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (loading) return
    const token = localStorage.getItem('token')
    runVerifyQuery({ variables: { token } })
      .then(() => {
        setLoaded(true)
      })
      .catch(() => {
        Router.push(LinkTo.login)
      })
  }, [loading])
  if (!loaded) return <LoadingPage />
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
