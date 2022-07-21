import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useGetTour } from '@shared/api/tour/useGetTour'
import { Tour } from '@shared/types/tours'
import { Box, Container, Image, Heading, Flex, Text } from '@chakra-ui/react'

export default function SingleTourPage() {
  const { query } = useRouter()
  const { id } = query

  const [runQuery, { data, loading, error }] = useGetTour()
  const [tour, setTour] = React.useState<Tour>({} as Tour)

  useEffect(() => {
    if (!id) return
    runQuery({ variables: { id } })
  }, [id])

  useEffect(() => {
    if (loading || !data) return
    setTour(data.getTour)
  }, [loading, data])

  if (error) return <>error</>

  return (
    <Box minH="90vh" w="100%" bg="white" py="50px">
      <Container maxW="1440px" p="20px" border="1px solid" borderColor="whitesmoke" borderRadius="15px">
        <Flex p="30px" gap="40px">
          <Flex flexDir="column" gap="10px" flex="1 0 50%">
            <Image maxH="700px" src={tour.mainImage} alt={tour.name} />
            <Heading fontWeight={400}>{tour.name}</Heading>
          </Flex>
          {/* <p>{tour.description}</p> */}
          <Text mt="90px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui rerum ea cumque error in sit repellendus, accusantium ullam
            quisquam minima ipsum adipisci delectus vero quia, aperiam et alias obcaecati. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ad qui rerum ea cumque error in sit repellendus, accusantium ullam quisquam minima ipsum adipisci delectus
            vero quia, aperiam et alias obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui rerum ea cumque error in
            sit repellendus, accusantium ullam quisquam minima ipsum adipisci delectus vero quia, aperiam et alias obcaecati. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ad qui rerum ea cumque error in sit repellendus, accusantium ullam quisquam minima
            ipsum adipisci delectus vero quia, aperiam et alias obcaecati.
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
