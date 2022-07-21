import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initToursTable } from 'redux/reducers/tours'
import { Box, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { TableContent, TourSearch, ToursPageHeader } from '../components'
import { LoadingPage } from '../../../components'
import { useGetTours } from 'common/api/tour/useGetTours'
import { Tour } from 'common/types/tours'

export function ToursPage() {
  const [mutate, { data, loading }] = useGetTours()
  const [loaded, setLoaded] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    mutate()
  }, [])

  useEffect(() => {
    if (loading || !data) return
    dispatch(initToursTable(data.getTours.results))
    const delay = setInterval(() => {
      setLoaded(true)
    }, 500)
    return () => {
      clearInterval(delay)
    }
  }, [loading, data])

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
  const [search, setSearch] = useState<string>('')
  const [category, setCategory] = useState<string>('All')
  const [content, setContent] = useState<Tour[]>(tours)
  useEffect(() => {
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
