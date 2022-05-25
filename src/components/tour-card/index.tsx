import React from 'react'
import { Flex, Box, Heading, Text, Icon, Image, Stack, Tag, Link } from '@chakra-ui/react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Stack key={tour.id} bg="white" borderRadius="15px" border="1px solid" borderColor="whitesmoke" shadow="xs">
      <Box
        h="50%"
        minH="50%"
        pos="relative"
        _hover={{ '.image': { transform: 'scale(1.2)' } }}
        overflow="hidden"
        borderRadius="15px 15px 0 0">
        <Flex
          visibility={tour.rating > 4 ? 'visible' : 'hidden'}
          pos="absolute"
          top="20px"
          left="-5px"
          bg="main_color_1"
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
      <Stack spacing={4} p="15px" pt="5px">
        <Flex justify="space-between" align="center">
          <Tag bg="main_color_2" color="green.50">
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
        <Link href={`/tour/${tour.id}`} _hover={{ opacity: 0.8 }} _active={{}} _focus={{}}>
          <Heading size="xs" fontWeight={400} h="30px">
            {tour.name}
          </Heading>
        </Link>
        <Flex justify="space-between" align="center">
          <Flex gap="5px" align="center">
            <Heading size="md" fontWeight={500} color="main_color_1">
              {tour.price} MAD
            </Heading>
            <Text textDecor="line-through" fontSize="xx-small" color="main_grey">
              ${tour.discount}
            </Text>
          </Flex>
          <Flex gap="5px" align="center">
            <Icon as={AiOutlineClockCircle} color="main_grey" />
            <Text fontSize="sm" color="main_grey">
              {tour.duration} hours
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  )
}
