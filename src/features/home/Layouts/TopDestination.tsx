import React, { useRef } from 'react'
import TourCard from '@components/Layouts/TourCard'
import { Tour } from '@shared/types/tours'
import { Box, Container, Flex, HStack, Heading } from '@chakra-ui/react'
import { useDraggable } from 'react-use-draggable-scroll'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function TopDestination() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const { events } = useDraggable(ref)
  const { lessthan600 } = useResponsive()
  const tours: Tour[] = [
    {
      id: '1',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '2',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '3',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '4',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '5',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '5',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
    {
      id: '5',
      name: '3 Days Desert Tour From Marrakech To Merzouga.',
      rating: 4,
      duration: 12,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      price: 123,
      discount: 0,
      mainImage: '/assets/images/09.jpeg',
      numberOfbooked: 3,
      features: ['', ''],
      images: [''],
      location: ['Marrakech'],
      category: ['Camel'],
      createdBy: '',
      createdAt: 0,
    },
  ]

  return (
    <Flex align="center" justify="center" as="section">
      <Container maxW="1400px" px={lessthan600 ? '20px' : '50px'}>
        <Heading fontSize="20px" fontWeight={700} color="color_1">
          WHAT WE SERVE
        </Heading>
        <Heading fontSize="45px" color="color_dark_blue" fontWeight="700" mt="10px" mb="15px">
          Top attractions near Marrakech 🐪
        </Heading>
        <HStack
          spacing="20px"
          {...events}
          ref={ref}
          overflowX="hidden"
          className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide">
          {tours.map((tour) => (
            <Box w="250px">
              <TourCard key={tour.id} tour={tour} />
            </Box>
          ))}
        </HStack>
      </Container>
    </Flex>
  )
}
