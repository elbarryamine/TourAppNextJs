import React from 'react'

import { Box, Center, useColorModeValue, Heading, Stack, Image, SimpleGrid } from '@chakra-ui/react'

export interface TopDestinationCardProps {
  image: string
  title: string
}

export default function TopDestination() {
  const cards: TopDestinationCardProps[] = [
    {
      title: 'Marrakech City 🇲🇦',
      image:
        'https://images.unsplash.com/photo-1640263408299-8972236d0590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2565&q=80',
    },
    {
      title: 'New York City 🇺🇸',
      image:
        'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80',
    },
    {
      title: 'Amalfi City 🇮🇹',
      image:
        'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Tokyo City 🇯🇵',
      image:
        'https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80',
    },
    {
      title: 'Essaouira City 🇲🇦',
      image:
        'https://images.unsplash.com/photo-1624804646552-92e162cb5e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Forbidden City 🇨🇳',
      image:
        'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Sevilla City 🇪🇸',
      image:
        'https://images.unsplash.com/photo-1559386081-325882507af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      title: 'Karabi City 🇹🇭',
      image:
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80',
    },
  ]

  return (
    <Box as="section">
      <Heading fontSize="20px" fontWeight={700} color="color_1">
        Top Destination
      </Heading>
      <Heading fontSize="45px" color="color_dark_blue" fontWeight="700" mt="10px" mb="15px">
        Top destinations for your next vacation 🌴
      </Heading>
      <SimpleGrid minChildWidth="288px" spacing={7} mt={14}>
        {cards.map((card) => (
          <TopDestinationCard title={card.title} image={card.image} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

const TopDestinationCard = ({ title, image }: TopDestinationCardProps) => {
  return (
    <Center mb={8}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
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
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={image} />
        </Box>
        <Stack pt={7} align={'center'}>
          <Heading fontSize="25px" color="color_dark_blue" fontWeight="700">
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}
