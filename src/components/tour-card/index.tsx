import React from 'react'
import { Flex, Box, Heading, Text, Icon, Image, Stack, Tag, Link } from '@chakra-ui/react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Stack key={tour.id} bg="white" borderRadius="15px" shadow="lg" border="1px solid" borderColor="whitesmoke" p="10px">
      <Box h="50%" minH="50%" pos="relative" _hover={{ '.image': { transform: 'scale(1.2)' } }} overflow="hidden" borderRadius="15px">
        <Image
          transition="all 0.5s"
          className="image"
          src={tour.mainImage}
          alt={tour.name}
          objectFit="cover"
          objectPosition="center"
          h="100%"
          w="100%"
        />
        <Link href={`/tour/${tour.id}`} pos="absolute" top="0" left="0" bg="#00000040" h="100%" w="100%">
          <Flex align="flex-end" justify="flex-end" h="100%" color="white" p="10px" fontWeight={300} fontSize="xs" />
        </Link>
      </Box>
      <Stack spacing={4} pt="5px">
        <Flex justify="space-between" align="center">
          <Tag bg="tag" color="tagText">
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
        <Link href={`/tour/${tour.id}`} _hover={{ color: 'primary.10' }} _active={{}} _focus={{}}>
          <Heading size="xs" fontWeight={400} noOfLines={1}>
            {tour.name}
          </Heading>
        </Link>
        <Flex justify="space-between" align="center">
          <Flex gap="5px" align="center">
            <Heading size="sm" fontWeight={500} color="gold">
              ${tour.price}
            </Heading>
            <Text textDecor="line-through" fontSize="xx-small" color="GrayText">
              ${tour.discount}
            </Text>
          </Flex>
          <Flex gap="5px" align="center">
            <Icon as={AiOutlineClockCircle} color="GrayText" />
            <Text fontSize="sm" color="GrayText">
              {tour.duration} hours
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  )
}
