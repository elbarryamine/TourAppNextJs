import React, { Fragment } from 'react'
import { Navigation, SimpleLoading, ErrorAlert, TourCard } from 'components'
import { Grid, Container, Flex, Stack, Button, Heading } from '@chakra-ui/react'
import { useGetTours } from 'api/tour/useGetTours'
import Filters from './components/filters'
import { Tour } from 'types/tours'

export default function SearchPage() {
  return (
    <Fragment>
      <Navigation />
      <Flex bg="main_color_2" color="white" h="30vh" px="50px" justify="center" gap="50px" align="center" flexDir="column">
        <Heading fontFamily="rale">Search for tours to book</Heading>
        <Heading fontFamily="rale" size="sm">
          Book an adventure today and you will get 100% refundable
        </Heading>
        <Flex w="100%" maxW="1200px" pos="relative" p="15px" bg="white" borderRadius="10px" shadow="sm" overflow="hidden" minH="50px">
          <Button pos="absolute" right="0" top="0" h="100%" borderRadius="0" bg="main_color_1" color="white">
            Find tours
          </Button>
        </Flex>
      </Flex>
      <Container maxW="1200px" h="100%" alignItems="center" justifyContent="space-between">
        <Stack spacing={5} pt="50px">
          <ToursDisplay />
        </Stack>
      </Container>
    </Fragment>
  )
}

function ToursDisplay() {
  const { data, loading, error } = useGetTours()
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const [tours, setTours] = React.useState<Tour[]>([])
  React.useEffect(() => {
    if (!data || loading) return
    setTours(data)
    setLoaded(true)
  }, [data, loading])
  if (error) return <ErrorAlert error={error} />
  if (!loaded) return <SimpleLoading minH="50vh" />
  return (
    <Stack borderRadius="5px">
      <Grid
        templateColumns={{ xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4, 1fr)' }}
        alignItems="center"
        justifyContent="space-between"
        columnGap={{ sm: '2px', md: '5px', lg: '10px' }}
        rowGap="20px"
        py="20px">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Grid>
    </Stack>
  )
}
