import React, { Fragment } from 'react'
import { Stats } from '../components'
import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Flex } from '@chakra-ui/react'
import { useChakraTheme } from 'common/hooks/usetheme'
import { Tour } from 'common/types/tours'

export function Home() {
  const { text } = useChakraTheme()
  return (
    <Fragment>
      <Stats />
      <Box px="20px">
        <Flex align="center" gap="10px" h="50px">
          <Text fontSize="display" fontWeight="extrabold" color={text}>
            Most Loved Tours
          </Text>
        </Flex>
        <Flex>
          <ToursCard
            title="Discover Fes Castles"
            tour={{} as Tour}
            image="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <ToursCard
            title="Ourzazate Camel Tour"
            tour={{} as Tour}
            image="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <ToursCard
            title="Quad Tour"
            tour={{} as Tour}
            image="https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <ToursCard
            title="Explore El Jadida"
            tour={{} as Tour}
            image="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </Flex>
      </Box>
    </Fragment>
  )
}

type PropsToursCard = {
  tour: Tour
  title: string
  image: string
}
function ToursCard({ tour, title, image }: PropsToursCard) {
  const { accenttext } = useChakraTheme()
  return (
    <Center px="5px" py="20px">
      <Box
        overflow="hidden"
        border="1px solid"
        borderColor={accenttext}
        shadow="lg"
        role="group"
        pb="10px"
        maxW="330px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        rounded="lg"
        pos="relative"
        zIndex={1}>
        <Box pos="relative" height="120px">
          <Image height={120} width={510} objectFit="cover" src={image} alt="" />
        </Box>
        <Stack pt={10} align="center">
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            {title}
          </Heading>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl">
              {tour.price ?? '50$'}
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
