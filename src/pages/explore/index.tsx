import React, { Fragment } from 'react'
import Head from 'next/head'
import Navigation from 'components/navigation'
import {
  Flex,
  Box,
  Heading,
  Button,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
  InputLeftElement,
  Grid,
  Image,
  Stack,
  Container,
} from '@chakra-ui/react'
import { IoGridOutline } from 'react-icons/io5'
import { AiOutlineSortAscending, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export default function ExplorePage() {
  return (
    <Fragment>
      <Head>
        <title>Tourlek | Explore</title>
      </Head>
      <Navigation />
      <Container maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Header />
        <Search />
        <Filters />
        <ToursResult />
      </Container>
    </Fragment>
  )
}

function Header() {
  return (
    <Flex h="20vh" p="20px" align="center" justify="center">
      <Box>
        <Heading fontWeight="100" sx={{ span: { color: 'primary.10', textDecor: 'dashed' } }} textTransform="uppercase">
          <span>Browse</span> hundreds of tours over <span>Morrocco</span>
        </Heading>
        <Text
          color="GrayText"
          fontSize="xs"
          sx={{ span: { color: 'primary.10' }, '.scratch': { textDecor: 'line-through', fontWeight: '100', color: 'gray.900' } }}
          textTransform="uppercase">
          We make sure you find <span className="scratch">a tour</span> <span>the Right adventure</span>
        </Text>
      </Box>
    </Flex>
  )
}
function Search() {
  const [value, setValue] = React.useState<string>('')
  return (
    <Flex py="20px" align="center" justify="center">
      <InputGroup maxW="500px">
        <InputLeftElement h="100%">
          <Icon as={AiOutlineSearch} color="primary.10" />
        </InputLeftElement>
        {value && (
          <InputRightElement h="100%" onClick={() => setValue('')} cursor="pointer">
            <Icon as={AiOutlineClose} color="primary.10" />
          </InputRightElement>
        )}
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          bg="white"
          border="1px"
          borderColor="primary.10"
          fontWeight="100"
          fontSize="body"
          _hover={{}}
          _focus={{
            ouline: '5px solid',
            oulineColor: 'primary',
          }}
          _placeholder={{ '&': { color: 'GrayText', fontSize: 'xs', fontWeight: '100' } }}
          placeholder="Search for an adventure ..."
        />
      </InputGroup>
    </Flex>
  )
}

function Filters() {
  const categoriesArr = ['All', 'Quad', 'Biking', 'Beach']
  const [activeCategory, setActiveCategory] = React.useState<string>('All')

  return (
    <Flex px="20px" justify="space-between">
      <Flex
        sx={{
          '& button': { h: 'max-content', fontSize: 'body', bg: 'transparent', fontWeight: 'normal' },
          '.active': { color: 'primary.10', fontWeight: '100' },
        }}
        w="max-content"
        align="center">
        {categoriesArr.map((categ: string, i: number) => (
          <Button
            key={i}
            onClick={() => setActiveCategory(categ)}
            className={categ === activeCategory ? 'active' : ''}
            _hover={{ textDecoration: 'underline' }}
            _focus={{}}
            _active={{}}>
            {categ}
          </Button>
        ))}
      </Flex>
      <Flex align="center" gap="20px">
        <Icon as={IoGridOutline} _hover={{ color: 'primary.10' }} />
        <Icon as={AiOutlineSortAscending} _hover={{ color: 'primary.10' }} />
      </Flex>
    </Flex>
  )
}

function ToursResult() {
  return (
    <Grid templateColumns={{ sm: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)' }} gap="20px" p="20px">
      {Array.from({ length: 50 }).map((_, index) => (
        <Flex key={index} h="400px" bg="white" borderRadius="5px" overflow="hidden" shadow="md" flexDir="column" pos="relative">
          <Image
            objectFit="cover"
            objectPosition="center"
            h="100%"
            flexGrow="1"
            src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="tour"
          />
          <Stack p="20px" bg="white" w="100%" pos="absolute" bottom="0">
            <Heading size="xs" textTransform="uppercase">
              Beach tour marrakech
            </Heading>
            <Flex>
              <Text color="GrayText" fontSize="xx-small">
                Best beach tour in marrakech
              </Text>
            </Flex>
          </Stack>
        </Flex>
      ))}
    </Grid>
  )
}
