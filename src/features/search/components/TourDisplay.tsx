import React, { useEffect, useState } from 'react'
import { SimpleLoading, ErrorAlert, TourCard, Pagination } from 'components'
import { Grid, Stack } from '@chakra-ui/react'
import { useGetTours } from 'common/api/tour/useGetTours'
import { Tour } from 'common/types/tours'
import { PaginationType } from '../types/pagination'

export default function ToursDisplay() {
  const [mutate, { data, loading, error }] = useGetTours()
  const [loaded, setLoaded] = useState<boolean>(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [pagination, setPagination] = useState<PaginationType>({} as PaginationType)
  let pageCount = 32

  const handlePageClick = async (selectedItem: { selected: number }) => {
    setLoaded(false)
    const response = await mutate({ variables: { page: selectedItem.selected, pageCount } })
    setTours(response.data.getTours.results)
    setPagination(response.data.getTours)
    setLoaded(true)
  }

  useEffect(() => {
    mutate({ variables: { pageCount: pageCount } })
  }, [])

  useEffect(() => {
    if (!data || loading) return
    setTours(data.getTours.results)
    setPagination(data.getTours)
    setLoaded(true)
  }, [data, loading])

  if (error) return <ErrorAlert error={error} />
  if (!loaded) return <SimpleLoading minH="50vh" />

  return (
    <Stack borderRadius="5px" spacing={2} pos="relative">
      <Pagination
        handlePageClick={handlePageClick}
        initialPage={pagination.currentPage}
        pageCount={Math.ceil(pagination.itemsCount / pagination.itemsOnPage)}
      />
      <Grid
        templateColumns={{ xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(3, 1fr)' }}
        alignItems="center"
        justifyContent="space-between"
        columnGap={{ sm: '12px', md: '15px', lg: '30px' }}
        rowGap="30px"
        py="30px">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Grid>
      <Pagination
        handlePageClick={handlePageClick}
        initialPage={pagination.currentPage}
        pageCount={Math.ceil(pagination.itemsCount / pagination.itemsOnPage)}
      />
    </Stack>
  )
}
