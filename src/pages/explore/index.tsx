import React, { Fragment } from 'react'
import Head from 'next/head'
import { Navigation, LoadingPage } from 'components'
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
  Alert,
  AlertIcon,
  AlertTitle,
  Tag,
  Link,
} from '@chakra-ui/react'
import { IoGridOutline } from 'react-icons/io5'
import { AiOutlineSortAscending, AiOutlineSearch, AiOutlineClose, AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'
import { useGetTours } from 'api/tour/useGetTours'

export default function ExplorePage() {
  const { data, loading, error } = useGetTours()
  const [loaded, setloaded] = React.useState<boolean>(false)
  const [tours, setTours] = React.useState<Tour[]>([])
  React.useEffect(() => {
    if (!data || loading) return
    setTours(data)
    setloaded(true)
  }, [data, loading])
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    )
  if (!loaded) return <LoadingPage />
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
        <ToursResult tours={tours} />
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

interface ToursResultProps {
  tours: Tour[]
}
function ToursResult({ tours }: ToursResultProps) {
  return (
    <Grid
      templateColumns={{ sm: '250px', md: 'repeat(2,250px)', lg: 'repeat(4,250px)', xl: 'repeat(5,250px)' }}
      alignItems="center"
      justifyContent="space-between"
      rowGap="50px"
      pt="20px">
      {tours.map((tour) => (
        <Stack key={tour.id} bg="white" borderRadius="5px" shadow="md">
          <Box h="50%" minH="50%" pos="relative" _hover={{ '.image': { transform: 'scale(1.2)' } }} overflow="hidden">
            <Image
              transition="all 0.5s"
              className="image"
              borderRadius="5px 5px 0 0"
              src={tour.mainImage}
              alt={tour.name}
              objectFit="cover"
              objectPosition="center"
              h="100%"
              w="100%"
            />
            <Link href={`/tour/${tour.id}`} pos="absolute" top="0" left="0" bg="#00000040" h="100%" w="100%">
              <Flex
                align="flex-end"
                justify="flex-end"
                h="100%"
                color="white"
                p="10px"
                fontWeight={300}
                fontSize="xs"
                _hover={{ textDecor: 'underline' }}>
                View tour
              </Flex>
            </Link>
          </Box>
          <Stack spacing={4} p="10px" pt="5px">
            <Flex justify="space-between" align="center">
              <Tag bg="tag" color="tagText">
                <Text noOfLines={1} fontSize="xs">
                  {tour.location[0]}
                </Text>
              </Tag>
              <Flex gap="5px">
                <Text fontSize="xs">Rating</Text>
                <Text fontSize="xs" color="gold">
                  4.8K
                </Text>
                <Icon as={AiFillStar} color="gold"></Icon>
              </Flex>
            </Flex>
            <Heading size="xs" fontWeight={400} noOfLines={1}>
              {tour.name}
            </Heading>
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
      ))}
    </Grid>
  )
}
