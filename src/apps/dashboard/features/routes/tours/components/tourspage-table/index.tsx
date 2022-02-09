import React, { Fragment } from 'react'
import { background, Box, Button, Checkbox, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaRegFrown, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Rating } from 'apps/dashboard/components'

const ui = {
  tmpColumns: '70px 1fr 120px 120px 200px',
}
export function ToursPageTable() {
  const { text, accenttext } = useChakraTheme()
  const tours: Tour[] = useSelector((state: RootState) => state.tours.toursOfTable)
  const [filterdTours, setfilterdTours] = React.useState<Tour[]>(tours)
  const [search, setSearch] = React.useState<string>('')
  const [category, setCategory] = React.useState<string>('')
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setSearch(value)
    if (!value) {
      setfilterdTours(tours)
      setCategory('All')
    } else {
      const results: Tour[] = []
      tours.forEach((tour) => {
        if (tour.name.toLowerCase().includes(value.toLowerCase())) {
          results.push(tour)
        }
      })
      setfilterdTours(results)
    }
  }
  React.useEffect(() => {
    setSearch('')
    if (category !== 'All' && category) {
      setfilterdTours(tours.filter((tour) => tour.category.includes(category)))
    } else {
      setfilterdTours(tours)
    }
  }, [category])
  return (
    <Flex flexDir="column">
      <TableToursFinder onChange={handleSearch} onCategoryChange={setCategory} value={search} activeCategory={category} />
      <Box shadow="2xl" color={text} border="1px solid" borderColor={accenttext} borderRadius="10px" overflow="hidden" pos="relative">
        <TableHead />
        <TableContent tours={filterdTours} isSearching={tours.length ? (search ? true : false) : false} />
      </Box>
    </Flex>
  )
}
type PropsTableToursFinder = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>
  value: string
  activeCategory: string
}
function TableToursFinder({ onChange, onCategoryChange, value, activeCategory }: PropsTableToursFinder) {
  const { text, subtext, primary, overPrimary } = useChakraTheme()
  const categories = ['All', 'Quad', 'Beach', 'Hiking']
  return (
    <Flex borderRadius="10px" my="20px" py="5px" justify="space-between" px="10px">
      <Flex
        sx={{
          '& button': { h: 'max-content', fontSize: 'body', bg: 'transparent', fontWeight: 'normal', color: text },
          '.active': { color: primary, fontWeight: 'extrabold' },
        }}
        w="max-content"
        align="center">
        {categories.map((categ: string, i: number) => (
          <Button
            key={i}
            onClick={() => onCategoryChange(categ)}
            className={categ === activeCategory ? 'active' : ''}
            _hover={{ textDecoration: 'underline' }}
            _focus={{}}
            _active={{}}>
            {categ}
          </Button>
        ))}
      </Flex>
      <InputGroup maxW="500px">
        <InputLeftElement h="100%" color="black">
          <FaSearch size="14px" />
        </InputLeftElement>
        <Input
          onChange={onChange}
          value={value}
          borderRadius="15px"
          bg={overPrimary}
          color={text}
          border="0"
          fontWeight="extrabold"
          fontSize="body"
          _hover={{ '&:hover::placeholder': { color: text } }}
          _focus={{
            ouline: '5px solid',
            oulineColor: 'primary',
          }}
          _placeholder={{ '&': { color: subtext, fontSize: 'sm', fontWeight: 'extrabold' } }}
          placeholder="Search for a tour..."
        />
      </InputGroup>
    </Flex>
  )
}

function TableHead() {
  const { background } = useChakraTheme()

  return (
    <Grid
      bg={background}
      templateColumns={ui.tmpColumns}
      placeItems="center"
      p="20px"
      sx={{ '.tableHeader': { fontWeight: 'bold', fontSize: 'headline' } }}>
      <Box />
      <Box className="tableHeader">Overview</Box>
      <Box className="tableHeader">Trip Length</Box>
      <Box className="tableHeader">Price</Box>
      <Box className="tableHeader">Actions</Box>
    </Grid>
  )
}
type PropsTableContent = {
  tours: Tour[]
  isSearching: boolean
}
function TableContent({ tours, isSearching }: PropsTableContent) {
  const { subtext, background, primary } = useChakraTheme()
  const [selectedIdsOfTours, setSelectedIdsOfTours] = React.useState<string[]>([])
  function handleChecked(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    if (selectedIdsOfTours.includes(id)) {
      setSelectedIdsOfTours([...selectedIdsOfTours].filter((tourId) => tourId !== id))
    } else {
      setSelectedIdsOfTours([...selectedIdsOfTours, id])
    }
  }
  function handleClear() {
    setSelectedIdsOfTours([])
  }
  React.useEffect(() => {
    if (isSearching) {
      handleClear()
    }
  }, [isSearching, tours])

  if (tours.length === 0) {
    return (
      <Flex align="center" justify="center" p="20px" w="100%" gap="20px" color={subtext}>
        <Text fontSize="sub" fontWeight="extrabold">
          {isSearching ? 'Could not find tour you are looking for' : 'Add your first tour to see it'}
        </Text>
        {isSearching && <FaRegFrown size="14px" />}
      </Flex>
    )
  }
  return (
    <Fragment>
      {selectedIdsOfTours.length ? (
        <Flex
          pos="absolute"
          top="0"
          left="0"
          p="10px"
          w="100%"
          align="flex-end"
          justify="flex-end"
          bg={background}
          overflow="hidden"
          gap="10px">
          <Button _focus={{}} _hover={{ bg: 'green.200' }} bg="green.100" color="green.500" onClick={handleClear}>
            Clear {selectedIdsOfTours.length >= 2 ? 'All' : ''}
          </Button>
          <Button justifySelf="flex-end" _focus={{}} _hover={{ bg: 'red.200' }} bg="red.100" color="red.500">
            Delete {selectedIdsOfTours.length >= 2 ? 'All' : ''}
          </Button>
        </Flex>
      ) : null}
      <Box maxH="60vh" overflowY="scroll">
        {tours.map((tour) => (
          <Grid key={tour.id} p="20px" templateColumns={ui.tmpColumns} placeItems="center">
            <Box>
              <Checkbox
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChecked(value, tour.id)}
                colorScheme="purple"
                color={primary}
                borderColor={primary}
                isChecked={selectedIdsOfTours.includes(tour.id) ? true : false}
              />
            </Box>
            <Flex gap="15px" align="center">
              <Image borderRadius="10px" w="15%" src={tour.mainImage} alt="Tour" />
              <Box>
                <Text fontSize="headline" fontWeight="extrabold">
                  {tour.name}
                </Text>
                <Rating rating={tour.rating} />
              </Box>
            </Flex>
            <Text fontWeight="extrabold">{tour.duration}</Text>
            <Text fontWeight="extrabold">{tour.price} Dh</Text>
            {selectedIdsOfTours.length ? (
              selectedIdsOfTours.includes(tour.id) ? (
                <Box userSelect="none" bg="red.100" p="5px" borderRadius="20px" px="10px">
                  <Text color="red.500" fontWeight="extrabold">
                    Will be removed
                  </Text>
                </Box>
              ) : null
            ) : (
              <Flex gap="10px" sx={{ '& button': { w: 'calc(190px / 3)', py: '10px', fontSize: 'sub' } }}>
                <Button _focus={{}} _hover={{ bg: 'blue.200' }} bg="blue.100" color="blue.500">
                  View
                </Button>
                <Button _focus={{}} _hover={{ bg: 'green.200' }} bg="green.100" color="green.500">
                  Edit
                </Button>
                <Button _focus={{}} _hover={{ bg: 'red.200' }} bg="red.100" color="red.500">
                  Delete
                </Button>
              </Flex>
            )}
          </Grid>
        ))}
      </Box>
    </Fragment>
  )
}
