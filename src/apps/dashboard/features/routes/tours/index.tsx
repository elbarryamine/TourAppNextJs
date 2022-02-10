import React from 'react'
import { Box } from '@chakra-ui/react'
import { ToursPageHeader, ToursPageTable } from './components'
import { useQuery, gql } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { initToursTable } from 'redux/reducers/tours'
import { LoadingPage } from 'components/loading'

const QUERY = gql`
  query {
    getTours {
      id
      name
      mainImage
      rating
      category
      duration
      price
    }
  }
`
export function ToursPage() {
  const { loading, data } = useQuery(QUERY)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (loading) return
    dispatch(initToursTable(data.getTours))
    const delay = setInterval(() => {
      setLoaded(true)
    }, 500)
    return () => {
      clearInterval(delay)
    }
  }, [loading])
  if (!loaded) return <LoadingPage />
  return (
    <Box h="100%" w="100%" p="20px">
      <ToursPageHeader />
      <ToursPageTable />
    </Box>
  )
}
