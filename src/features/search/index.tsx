import React, { Fragment } from 'react'
import { Navigation, LoadingPage, Subscribe } from 'components'
import { Grid, Container, Alert, AlertIcon, AlertTitle, Flex, Stack } from '@chakra-ui/react'
import { useGetTours } from 'api/tour/useGetTours'
import TourCard from 'components/tour-card'
import Filters, { SideFilters } from './components/filters'

export default function SearchPage() {
  const { data, loading, error } = useGetTours()
  const [loaded, setloaded] = React.useState<boolean>(false)
  const [tours, setTours] = React.useState<Tour[]>([])
  React.useEffect(() => {
    if (!data || loading) return
    setTours(data)
    setloaded(true)
  }, [data, loading])
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    )
  if (!loaded) return <LoadingPage />
  return (
    <Fragment>
      <Navigation />
      <Container maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Flex gap="20px" mt="20px">
          <Stack flex="0 0 300px" spacing={10}>
            <Subscribe />
            <SideFilters />
          </Stack>
          <Stack bg="white" p="20px" borderRadius="5px">
            <Filters />
            <Grid
              templateColumns={{ sm: '250px', md: '250px', lg: 'repeat(2,250px)', xl: 'repeat(3,250px)' }}
              alignItems="center"
              justifyContent="space-between"
              columnGap="10px"
              rowGap="20px"
              pt="20px">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </Stack>
        </Flex>
      </Container>
    </Fragment>
  )
}
