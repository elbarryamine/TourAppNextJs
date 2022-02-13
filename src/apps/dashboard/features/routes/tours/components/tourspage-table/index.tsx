import React, { Fragment } from 'react'
import { Box, Button, Checkbox, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaRegFrown, FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Pagination, Rating } from 'apps/dashboard/components'
import { useSearchParams, useLocation } from 'react-router-dom'
import qr from 'query-string'
import { ModalMessage } from 'components/modal'
import { gql, useMutation } from '@apollo/client'
import { deleteTour } from 'redux/reducers/tours'

const ui = {
  tmpColumns: '70px 1fr 120px 120px 200px',
}

export function ToursPageTable() {
  const { accenttext, text } = useChakraTheme()
  const tours = useSelector((state: RootState) => state.tours.toursOfTable)
  const [search, setSearch] = React.useState<string>('')
  const [category, setCategory] = React.useState<string>('All')
  const [content, setContent] = React.useState<Tour[]>(tours)
  React.useEffect(() => {
    let filtered = tours
    if (category !== 'All') {
      filtered = filtered.filter((tour) => tour.category.includes(category))
    }
    if (search) {
      filtered = filtered.filter((tour) => tour.name.includes(search))
    }
    setContent(filtered)
  }, [category, search, tours])
  return (
    <Flex flexDir="column">
      <TableToursFinder
        hide={tours.length === 0}
        onChange={(e) => setSearch(e.target.value)}
        onCategoryChange={setCategory}
        value={search}
        activeCategory={category}
        categories={Array.from(new Set(tours.flatMap((tour) => tour.category)))}
      />
      <Box shadow="md" color={text} border="1px solid" borderColor={accenttext} borderRadius="10px" overflow="hidden" pos="relative">
        <TableHead />
        <TableContent tours={content} isSearching={tours.length ? (search ? true : false) : false} />
      </Box>
    </Flex>
  )
}
type PropsTableToursFinder = {
  hide?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>
  value: string
  activeCategory: string
  categories: string[]
}
function TableToursFinder({ hide, onChange, onCategoryChange, value, activeCategory, categories }: PropsTableToursFinder) {
  const { text, primary, background } = useChakraTheme()
  const categoriesArr = categories.length ? ['All', ...categories] : []
  return (
    <Flex visibility={hide ? 'hidden' : 'visible'} borderRadius="10px" my="10px" py="5px" justify="space-between" px="10px">
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
const QUERYDELETESINGLE = gql`
  mutation m2($id: String!) {
    deleteTour(id: $id)
  }
`
const itemsPerPage = 6
function TableContent({ tours, isSearching }: PropsTableContent) {
  const setSearchParams = useSearchParams()[1]
  const { search } = useLocation()
  const dispatch = useDispatch()
  const { text, background } = useChakraTheme()
  const [isModalOpen, setOpenModal] = React.useState<boolean>(false)
  const [selectedIdsOfTours, setSelectedIdsOfTours] = React.useState<string[]>([])
  const [selectedId, setSelectedId] = React.useState<string>('')
  const [runDeleteSingleTour, { loading, data }] = useMutation(QUERYDELETESINGLE)
  const [pageCount, setPageCount] = React.useState<number>(0)
  const [itemOffset, setItemOffset] = React.useState<number>(0)
  const [displayedTours, setDisplayedTours] = React.useState<Tour[]>(tours.slice())

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
  function handlePageClick(e: { selected: number }) {
    const newOffset = (e.selected * itemsPerPage) % tours.length
    setItemOffset(newOffset)
    setSearchParams({ page: Number(e.selected + 1).toString() })
  }
  async function handleConfirmDelete() {
    dispatch(deleteTour({ id: selectedId }))
    try {
      if (selectedIdsOfTours.length) {
      } else {
        await runDeleteSingleTour({ variables: { id: selectedId } })
      }
      setOpenModal(false)
    } catch {}
  }
  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setDisplayedTours(tours.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(tours.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, tours])

  React.useEffect(() => {
    if (loading || !data) return
    if (data) {
      dispatch(deleteTour({ id: selectedId }))
      setSelectedId('')
    }
  }, [loading, data])
  React.useEffect(() => {
    if (isSearching) {
      handleClear()
    }
  }, [isSearching, tours])
  React.useEffect(() => {
    const newOffset = (0 * itemsPerPage) % tours.length
    setItemOffset(newOffset)
    setSearchParams({ page: '1' })
  }, [tours])
  return displayedTours.length === 0 ? (
    <Flex align="center" justify="center" p="15px" w="100%" gap="20px" color={text}>
      <Text fontSize="body" fontWeight="extrabold">
        {isSearching
          ? 'Could not find tour you are looking for'
          : 'Add your tour and we will review it as soon as possible for your to see it here !'}
      </Text>
      {isSearching && <FaRegFrown size="14px" />}
    </Flex>
  ) : (
    <Fragment>
      <ModalMessage
        headerContent="Are you sure you want to delete?"
        bodyContent="This operation is not reversable"
        variant="primary"
        footerContent={
          <Button
            _foucs={{}}
            _active={{}}
            _hover={{ opacity: 0.5 }}
            bg="transparent"
            border="1px solid"
            borderColor="misc.red"
            color="misc.red"
            onClick={handleConfirmDelete}>
            Delete
          </Button>
        }
        isOpen={isModalOpen}
        setIsOpen={setOpenModal}
      />
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
          <Button
            _focus={{}}
            _hover={{ opacity: 0.5 }}
            border="1px solid"
            bg=""
            borderColor="misc.green"
            color="misc.green"
            onClick={handleClear}>
            Clear {selectedIdsOfTours.length >= 2 ? 'All' : ''}
          </Button>
          <Button
            justifySelf="flex-end"
            _focus={{}}
            _hover={{ opacity: 0.5 }}
            border="1px solid"
            bg=""
            borderColor="misc.red"
            color="misc.red"
            onClick={() => setOpenModal(true)}>
            Delete {selectedIdsOfTours.length >= 2 ? 'All' : ''}
          </Button>
        </Flex>
      ) : null}
      <Box maxH="50vh" overflowY="scroll">
        {displayedTours.map((tour) => (
          <Grid key={tour.id} p="20px" templateColumns={ui.tmpColumns} placeItems="center">
            <Box>
              <Checkbox
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChecked(value, tour.id)}
                borderColor={text}
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
                <Box userSelect="none" p="5px" borderRadius="20px" px="10px">
                  <Text color="misc.red" fontWeight="extrabold">
                    Will be removed
                  </Text>
                </Box>
              ) : null
            ) : (
              <Flex gap="10px" sx={{ '& button': { w: 'calc(190px / 3)', py: '10px', fontSize: 'sub' } }}>
                <Button _focus={{}} _hover={{ opacity: 0.5 }} bg="transparent" border="1px solid" borderColor="misc.blue" color="misc.blue">
                  View
                </Button>
                <Button
                  _focus={{}}
                  _hover={{ opacity: 0.5 }}
                  bg="transparent"
                  border="1px solid"
                  borderColor="misc.green"
                  color="misc.green">
                  Edit
                </Button>
                <Button
                  _focus={{}}
                  _hover={{ opacity: 0.5 }}
                  bg="transparent"
                  border="1px solid"
                  borderColor="misc.red"
                  color="misc.red"
                  onClick={() => {
                    setSelectedId(tour.id)
                    setOpenModal(true)
                  }}>
                  Delete
                </Button>
              </Flex>
            )}
          </Grid>
        ))}
      </Box>
      <Pagination initialPage={Number(qr.parse(search).page) - 1 || 0} pageCount={pageCount} handlePageClick={handlePageClick} />
    </Fragment>
  )
}
