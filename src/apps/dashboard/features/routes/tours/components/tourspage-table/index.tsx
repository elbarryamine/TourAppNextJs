import React, { Fragment } from 'react'
import { Box, Button, Checkbox, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaRegFrown, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Pagination, Rating } from 'apps/dashboard/components'
import { useSearchParams, useLocation } from 'react-router-dom'
import qr from 'query-string'

const ui = {
  tmpColumns: '70px 1fr 120px 120px 200px',
}

export function ToursPageTable() {
  const setSearchParams = useSearchParams()[1]
  const { search: searchQueryFromUrl } = useLocation()
  const { text, accenttext } = useChakraTheme()
  const tours: Tour[] = useSelector((state: RootState) => state.tours.toursOfTable)
  const itemsPerPage = 6
  const [toursOfThisPage, setToursOfThisPage] = React.useState<Tour[]>(tours.slice(0, 6))
  const [filterdTours, setfilterdTours] = React.useState<Tour[]>(toursOfThisPage)
  const [search, setSearch] = React.useState<string>('')
  const pageCount = Math.ceil(tours.length / 6)
  const [category, setCategory] = React.useState<string>('All')
  const [categories, setCategories] = React.useState<string[]>([])
  const { page } = qr.parse(searchQueryFromUrl)

  function handlePageClick(e: { selected: number }) {
    const startIndex = (e.selected * itemsPerPage) % tours.length
    const endIndex = startIndex + itemsPerPage
    setToursOfThisPage(() => tours.slice(startIndex, endIndex))
    const pageParam = e.selected + 1
    setSearchParams({ page: pageParam.toString() })
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    setSearch(value)
    if (!value) {
      setfilterdTours(toursOfThisPage)
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
    const categoriesSet: Set<string> = new Set()
    tours.forEach((tour) => tour.category.forEach((cat: string) => categoriesSet.add(cat)))
    setCategories(Array.from(categoriesSet))
  }, [tours])
  React.useEffect(() => {
    setfilterdTours(toursOfThisPage)
  }, [toursOfThisPage])
  React.useEffect(() => {
    setSearch('')
    if (category !== 'All' && category) {
      setfilterdTours(toursOfThisPage.filter((tour) => tour.category.includes(category)))
    } else {
      setfilterdTours(toursOfThisPage)
    }
  }, [category])
  return (
    <Flex flexDir="column">
      <TableToursFinder
        onChange={handleSearch}
        onCategoryChange={setCategory}
        value={search}
        activeCategory={category}
        categories={categories}
      />
      <Box shadow="2xl" color={text} border="1px solid" borderColor={accenttext} borderRadius="10px" overflow="hidden" pos="relative">
        <TableHead />
        <TableContent tours={filterdTours} isSearching={tours.length ? (search ? true : false) : false} />
      </Box>
      <Pagination initialPage={page ? Number(page) - 1 : 1} pageCount={pageCount} handlePageClick={handlePageClick} />
    </Flex>
  )
}
type PropsTableToursFinder = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>
  value: string
  activeCategory: string
  categories: string[]
}
function TableToursFinder({ onChange, onCategoryChange, value, activeCategory, categories }: PropsTableToursFinder) {
  const { text, primary, background } = useChakraTheme()
  const categoriesArr = ['All', ...categories]
  return (
    <Flex borderRadius="10px" my="10px" py="5px" justify="space-between" px="10px">
      <Flex
        sx={{
          '& button': { h: 'max-content', fontSize: 'body', bg: 'transparent', fontWeight: 'normal', color: text },
          '.active': { color: primary, fontWeight: 'extrabold' },
        }}
        w="max-content"
        align="center">
        {categoriesArr.map((categ: string, i: number) => (
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
        <InputLeftElement h="100%" color={text}>
          <FaSearch size="14px" />
        </InputLeftElement>
        <Input
          onChange={onChange}
          value={value}
          borderRadius="15px"
          bg={background}
          color={text}
          border="0"
          fontWeight="extrabold"
          fontSize="body"
          _hover={{ '&:hover::placeholder': { color: text } }}
          _focus={{
            ouline: '5px solid',
            oulineColor: 'primary',
          }}
          _placeholder={{ '&': { color: text, fontSize: 'sm', fontWeight: 'extrabold' } }}
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
      p="15px"
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
  const { text, background, primary } = useChakraTheme()
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
      <Flex align="center" justify="center" p="15px" w="100%" gap="20px" color={text}>
        <Text fontSize="body" fontWeight="extrabold">
          {isSearching
            ? 'Could not find tour you are looking for'
            : 'Add your tour and we will review it as soon as possible for your to see it here !'}
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
      <Box maxH="50vh" overflowY="scroll">
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
