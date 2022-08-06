import React from 'react'
import { Flex, Box, Heading, Text, Icon, Stack, Tag, LinkBox, LinkOverlay, BoxProps, useColorModeValue } from '@chakra-ui/react'
import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { Tour } from '@shared/types/tours'
import Link from 'next/link'
import Image from 'next/image'

export default function TourCard({ tour, ...props }: { tour: Tour } & BoxProps) {
  const ratingAverage = tour.rating.reduce((prv, curr) => prv + curr, 0) / tour.rating.length
  return (
    <LinkBox
      p={6}
      my={12}
      maxW={'330px'}
      w="288px"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'md'}
      _hover={{ boxShadow: 'lg' }}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      {...props}>
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${tour.image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
        sx={{
          img: {
            position: 'relative',
            rounded: 'lg',
            height: 230,
            width: 282,
            objectFit: 'cover',
          },
        }}>
        <Flex
          display={ratingAverage > 4 ? 'block' : 'none'}
          pos="absolute"
          top="0px"
          right="0"
          bg="color_2"
          color="white"
          zIndex="2"
          px="20px"
          py="3px"
          align="center"
          justify="center"
          borderBottomLeftRadius="lg"
          borderTopRightRadius="lg">
          <Text fontSize="sm" fontWeight={900}>
            Popular
          </Text>
        </Flex>
        <Image src={tour.image} alt={tour.name} blurDataURL={tour.image} placeholder="blur" layout="fill" />
      </Box>
      <Stack pt={7}>
        <Link href={`/tour/${tour.id}`} passHref>
          <LinkOverlay>
            <Heading fontSize="md" color="color_dark_blue" fontWeight="700" noOfLines={2}>
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
                {tour.rating.reduce((prv, acc) => prv + acc, 0) / tour.rating.length}
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
