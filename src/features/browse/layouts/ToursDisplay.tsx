import React, { useRef } from 'react'
import { Box, Button, Flex, Heading, HStack } from '@chakra-ui/react'
import { Tour } from '@shared/types/tours'
import { useDraggable } from 'react-use-draggable-scroll'

import TourCard from '@components/Layouts/TourCard'
import Link from 'next/link'

export default function ToursDisplay() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)
  const tours: Tour[] = Array<Tour>(10).fill({
    id: '1',
    name: '3 Days Desert Tour From Marrakech To Merzouga.',
    rating: [4],
    duration: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    price: 123,
    discount: 0,
    image: '/assets/images/99.jpeg',
    numberOfbooked: 3,
    features: ['', ''],
    images: [''],
    locations: [''],
    startLocation: 'New York',
    categories: ['Camel'],
    createdBy: '',
    createdAt: new Date(),
  })

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Heading fontSize="45px" color="color_dark_blue" fontWeight="700" mt="10px" mb="15px">
          Top activities ⛳
        </Heading>
        <Button borderRadius={5} colorScheme="none" bg="color_1" color="color_light" _hover={{ bg: 'color_1_hover' }}>
          <Link href="#">Explore all</Link>
        </Button>
      </Flex>
      <HStack spacing="20px" overflowX="hidden" {...events} ref={ref}>
        {tours.map((tour, index) => (
          <TourCard flexShrink="0" key={index} tour={tour} />
        ))}
      </HStack>
    </Box>
  )
}
