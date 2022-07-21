import React from 'react'
import { Flex, Box, Heading, Text, Icon, Image, Stack, Tag, Link, Divider, Skeleton } from '@chakra-ui/react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { Tour } from 'common/types/tours'

export function TourCard({ tour }: { tour: Tour }) {
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false)
  return (
    <Box key={tour.id} bg="white" border="1px solid whitesmoke" borderRadius="5px" overflow="hidden">
      <Box h="50%" pos="relative" _hover={{ '.image': { transform: 'scale(1.2)' } }} overflow="hidden">
        <Flex
          display={tour.rating > 4 ? 'block' : 'none'}
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
        <Box h="200px">
          <Skeleton h="100%" w="100%" display={!imageLoaded ? 'block' : 'none'} />
          <Image
            display={imageLoaded ? 'block' : 'none'}
            transition="all 0.5s"
            className="image"
            src={tour.mainImage}
            alt={tour.name}
            objectFit="cover"
            objectPosition="center"
            onLoad={() => setImageLoaded(true)}
            h="100%"
            w="100%"
          />
        </Box>
        <Link href={`/tour/${tour.id}`} pos="absolute" top="0" left="0" bg={!imageLoaded ? 'transparent' : '#00000040'} h="100%" w="100%">
          <Flex align="flex-end" justify="flex-end" h="100%" color="white" p="10px" fontWeight={300} fontSize="xs" />
        </Link>
      </Box>
      <Divider borderColor="color_grey_3" />
      <Stack p="15px">
        <Link href={`/tour/${tour.id}`} _hover={{ opacity: 0.8 }} _active={{}} _focus={{}}>
          <Heading size="sm" fontWeight={400} noOfLines={1}>
            {tour.name}
          </Heading>
        </Link>
        <Text fontSize="sm" color="color_grey_1" noOfLines={1}>
          {tour.category.join(' - ')}
        </Text>
        <Flex justify="space-between" align="center" py="10px" color="color_light">
          <Tag bg="color_1" color="green.50">
            <Text noOfLines={1} fontSize="xs">
              {tour.location[0]}
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
    </Box>
  )
}
