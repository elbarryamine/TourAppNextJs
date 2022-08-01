import React from 'react'
import { Flex, Box, Heading, Text, Icon, Stack, Tag, LinkBox, LinkOverlay, Skeleton, BoxProps } from '@chakra-ui/react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { Tour } from '@shared/types/tours'
import Link from 'next/link'
import Image from 'next/image'

export default function TourCard({ tour, ...props }: { tour: Tour } & BoxProps) {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false)
  const ratingAverage = tour.rating.reduce((prv, curr) => prv + curr, 0) / tour.rating.length
  return (
    <LinkBox
      bg="white"
      borderRadius="8px"
      overflow="hidden"
      w="250px"
      p="5px"
      m="12px"
      transition="all 0.5s"
      border="1px solid"
      borderColor="color_grey_3"
      _hover={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
      {...props}>
      <Box h="50%" pos="relative" _hover={{ '.image': { transform: 'scale(1.2)' } }} overflow="hidden" borderRadius="8px">
        <Flex
          display={ratingAverage > 4 ? 'block' : 'none'}
          pos="absolute"
          top="20px"
          left="-5px"
          bg="color_2"
          color="white"
          zIndex="2"
          px="20px"
          py="3px"
          align="center"
          justify="center"
          borderRadius="5px">
          <Text fontFamily="rale" fontSize="sm" fontWeight={900}>
            Popular
          </Text>
        </Flex>
        <Box h="200px" borderRadius="8px">
          <Skeleton h="100%" w="100%" display={!imageLoaded ? 'block' : 'none'} borderRadius="8px" />
          <Box pos="relative" h="100%" w="100%" display={imageLoaded ? 'block' : 'none'} transition="all 0.5s" className="image">
            <Image
              layout="fill"
              src={tour.image}
              alt={tour.name}
              objectFit="cover"
              objectPosition="center"
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        </Box>
      </Box>
      <Stack p="15px">
        <Link href={`/tour/${tour.id}`} passHref>
          <LinkOverlay>
            <Heading size="sm" fontWeight={400} noOfLines={1}>
              {tour.name}
            </Heading>
          </LinkOverlay>
        </Link>
        <Text fontSize="sm" color="color_grey_1" noOfLines={1}>
          {tour.categories.join(' - ')}
        </Text>
        <Flex justify="space-between" align="center" py="10px" color="color_light">
          <Tag bg="color_1" color="green.50">
            <Text noOfLines={1} fontSize="xs">
              {tour.startLocation}
            </Text>
          </Tag>
          <Flex gap="5px" align="center">
            <Text fontSize="xs">Rating</Text>
            <Flex align="center">
              <Text fontSize="xs" color="gold" fontWeight={900}>
                ( {tour.rating} )
              </Text>
              <Icon as={AiFillStar} color="gold"></Icon>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap="5px" align="center">
            <Icon as={AiOutlineClockCircle} color="color_grey_1" />
            <Text fontSize="sm" color="color_grey_1">
              {tour.duration} hours
            </Text>
          </Flex>
          <Flex gap="5px" align="center">
            <Heading size="md" fontWeight={100} color="color_2">
              {tour.price / 100} MAD
            </Heading>
          </Flex>
        </Flex>
      </Stack>
    </LinkBox>
  )
}
