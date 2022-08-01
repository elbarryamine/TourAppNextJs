import React, { useEffect, useState } from 'react'
import { Grid, Stack } from '@chakra-ui/react'
import { useGetTours } from '@shared/api/tour/useGetTours'
import { Tour } from '@shared/types/tours'
import { PaginationType } from '@shared/types/pagination'
import { Pagination } from '@components/Layouts/Pagination'
import TourCard from '@components/Layouts/TourCard'
import ErrorAlert from '@components/Layouts/ErrorAlert'
import { SimpleLoading } from '@components/Layouts/SimpleLoading'

export default function ToursDisplay() {
  const [mutate, { data, loading, error }] = useGetTours()
  const [loaded, setLoaded] = useState<boolean>(false)
  const [tours, setTours] = useState<Tour[]>([])
  const [pagination, setPagination] = useState<PaginationType>({} as PaginationType)
  let pageCount = 32

  const handlePageClick = async (selectedItem: { selected: number }) => {
    setLoaded(false)
    const response = await mutate({ variables: { page: selectedItem.selected, pageCount } })
    setTours(response.data.GetAllTours.results)
    setPagination(response.data.GetAllTours)
    setLoaded(true)
  }

  useEffect(() => {
    mutate({ variables: { pageCount: pageCount } })
  }, [])

  useEffect(() => {
    if (!data || loading) return
    setTours(data.GetAllTours.results)
    setPagination(data.GetAllTours)
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
      <Grid templateColumns="repeat(4, 1fr)" gap="20px">
        {tours.map((tour) => (
          <TourCard w="100%" key={tour.id} tour={tour} />
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
