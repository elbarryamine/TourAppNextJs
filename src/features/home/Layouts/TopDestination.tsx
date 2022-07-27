import React, { useRef } from 'react'
import TourCard from '@components/Layouts/TourCard'
import { Tour } from '@shared/types/tours'
import { Container, Flex, HStack, Heading } from '@chakra-ui/react'
import { useDraggable } from 'react-use-draggable-scroll'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function TopDestination() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)
  const { lessthan600 } = useResponsive()
  const tours: Tour[] = Array<Tour>(10).fill({
    id: '1',
    name: '3 Days Desert Tour From Marrakech To Merzouga.',
    rating: [4],
    duration: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    price: 123,
    discount: 0,
    image: '/assets/images/09.jpeg',
    numberOfbooked: 3,
    features: ['', ''],
    images: [''],
    locations: ['Marrakech'],
    startLocation: 'Marrakech',
    categories: ['Camel'],
    createdBy: '',
    createdAt: new Date(),
  })
  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1400px" px={lessthan600 ? '20px' : '50px'}>
        <Heading fontSize="20px" fontWeight={700} color="color_1">
          WHAT WE SERVE
        </Heading>
        <Heading fontSize="45px" color="color_dark_blue" fontWeight="700" mt="10px" mb="15px">
          Top attractions near Marrakech 🐪
        </Heading>
        <HStack spacing="20px" overflowX="hidden" {...events} ref={ref}>
          {tours.map((tour, index) => (
            <TourCard flexShrink="0" key={index} tour={tour} />
          ))}
        </HStack>
      </Container>
    </Flex>
  )
}
