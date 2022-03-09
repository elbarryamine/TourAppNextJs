import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { initToursTable } from 'redux/reducers/tours'
import { LoadingPage } from 'components/loading'
import { Box, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { TableContent, TourSearch, ToursPageHeader } from '../../components'

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
      location
      createdAt
      createdBy
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
      <ToursTable />
    </Box>
  )
}

function ToursTable() {
  const tours = useSelector((state: RootState) => state.tours.toursOfTable)
  const [search, setSearch] = React.useState<string>('')
  const [category, setCategory] = React.useState<string>('All')
  const [content, setContent] = React.useState<Tour[]>(tours)
  React.useEffect(() => {
    let filtered = tours
    if (category !== 'All') {
      filtered = filtered.filter((tour) => tour.category.includes(category))
    }
    if (search) {
      filtered = filtered.filter((tour) => tour.name.includes(search))
    }
    setContent(filtered)
  }, [category, search, tours])
  return (
    <Flex flexDir="column">
      <TourSearch
        hide={tours.length === 0}
        onChange={(e) => setSearch(e.target.value)}
        onCategoryChange={setCategory}
        value={search}
        activeCategory={category}
        categories={Array.from(new Set(tours.flatMap((tour) => tour.category)))}
      />
      <TableContent tours={content} isSearching={tours.length ? (search ? true : false) : false} />
    </Flex>
  )
}
