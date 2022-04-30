import React, { Fragment } from 'react'
import { Box, Button, Checkbox, Flex, Grid, Image, Menu, MenuButton, MenuItem, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { FaEllipsisV, FaRegFrown, FaRegTrashAlt, FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Pagination, Rating } from 'components'
import { useSearchParams, useLocation } from 'react-router-dom'
import qr from 'query-string'
import { ModalMessage } from 'components/modal'
import { gql, useMutation } from '@apollo/client'
import { deleteTour } from 'redux/reducers/tours'
import { ui } from 'utils/ui'
import daysjs from 'dayjs'

type PropsTableContent = {
  tours: Tour[]
  isSearching: boolean
}
const QUERYDELETESINGLE = gql`
  mutation m2($ids: [String]!) {
    deleteTour(ids: $ids)
  }
`
const itemsPerPage = 6
export function TableContent({ tours, isSearching }: PropsTableContent) {
  const { text, background, accenttext } = useChakraTheme()
  const setSearchParams = useSearchParams()[1]
  const { search } = useLocation()
  const dispatch = useDispatch()
  const [isModalOpen, setOpenModal] = React.useState<boolean>(false)
  const [selectedIdsOfTours, setSelectedIdsOfTours] = React.useState<string[]>([])
  const [selectedId, setSelectedId] = React.useState<string>('')
  const [runDeleteTours, { loading, data }] = useMutation(QUERYDELETESINGLE)
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
    try {
      if (selectedIdsOfTours.length) {
        selectedIdsOfTours.forEach((id: string) => {
          dispatch(deleteTour({ id }))
        })
        await runDeleteTours({ variables: { ids: selectedIdsOfTours } })
        setSelectedIdsOfTours([])
      } else {
        dispatch(deleteTour({ id: selectedId }))
        await runDeleteTours({ variables: { ids: [selectedId] } })
        setSelectedIdsOfTours([])
      }
      setOpenModal(false)
    } catch {}
  }
  React.useEffect(() => {
    handleClear()
  }, [displayedTours])
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
  return (
    <Box pos="relative">
      <Box borderRadius="5px" border="1px solid" borderColor={accenttext} bg={background} shadow="base">
        <Grid
          borderBottom="1px solid"
          borderColor={accenttext}
          templateColumns={ui.tmpColumns}
          placeItems="center"
          p="20px"
          sx={{ '.tableHeader': { fontWeight: 'bold', fontSize: 'body', textTransform: 'uppercase' } }}
          color={text}
          pos="relative"
          overflow="hidden">
          {selectedIdsOfTours.length ? (
            <Flex bg={background} pos="absolute" top="0" right="20px" w="100%" h="100%" align="center" justify="flex-end" gap="5px">
              <Button rightIcon={<FaTimes />} fontSize="body" _focus={{}} _hover={{ opacity: 0.5 }} bg="" onClick={handleClear}>
                Clear {selectedIdsOfTours.length >= 2 ? 'All' : ''}
              </Button>
              <Button
                fontSize="body"
                rightIcon={<FaRegTrashAlt />}
                justifySelf="flex-end"
                _focus={{}}
                _hover={{ opacity: 0.5 }}
                bg=""
                color="misc.red"
                onClick={() => setOpenModal(true)}>
                Delete {selectedIdsOfTours.length >= 2 ? 'All' : ''}
              </Button>
            </Flex>
          ) : null}
          <Box />
          <Box className="tableHeader">Overview</Box>
          <Box className="tableHeader">Trip Length</Box>
          <Box className="tableHeader">Price</Box>
          <Box className="tableHeader">Actions</Box>
        </Grid>
        {displayedTours.length === 0 ? (
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
            {displayedTours.map((tour) => (
              <TourRow
                key={tour.id}
                tour={tour}
                handleChecked={handleChecked}
                selectedIdsOfTours={selectedIdsOfTours}
                setOpenModal={setOpenModal}
                setSelectedId={setSelectedId}
              />
            ))}
            {/* <Box overflowY="auto">
            </Box> */}
          </Fragment>
        )}
      </Box>
      <Pagination initialPage={Number(qr.parse(search).page) - 1 || 0} pageCount={pageCount} handlePageClick={handlePageClick} />
    </Box>
  )
}

type TourRowProps = {
  tour: Tour
  handleChecked: Function
  selectedIdsOfTours: string[]
  setSelectedId: Function
  setOpenModal: Function
}
function TourRow({ tour, handleChecked, selectedIdsOfTours, setSelectedId, setOpenModal }: TourRowProps) {
  const { text, background, accenttext, subtext } = useChakraTheme()

  return (
    <Grid pos="relative" _hover={{ bg: accenttext }} key={tour.id} py="10px" templateColumns={ui.tmpColumns} placeItems="center">
      <Flex align="center" w="max-content" justify="flex-end">
        <Checkbox
          onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChecked(value, tour.id)}
          borderColor={text}
          isChecked={selectedIdsOfTours.includes(tour.id) ? true : false}
        />
      </Flex>
      <Flex gap="20px" justify="flex-start" w="100%" align="center">
        <Image w="50px" h="50px" borderRadius="50%" src={tour.mainImage} alt="Tour" />
        <Flex flexDir="column" justify="center">
          <Text textAlign="left" fontSize="headline" fontWeight="extrabold">
            {tour.name}
          </Text>
          <Text textAlign="left" fontSize="sub" fontWeight="semibold" color={subtext}>
            {`${daysjs(tour.createdAt).format('DD MMM YYYY hh:mm a')}`}
          </Text>
          <Rating rating={tour.rating} />
        </Flex>
      </Flex>

      <Text fontWeight="extrabold">{tour.duration}</Text>
      <Text fontWeight="extrabold">{tour.price} Dh</Text>
      <Menu>
        <MenuButton as={Button} borderRadius="50%" _focus={{}} bg="" color={text}>
          <FaEllipsisV />
        </MenuButton>
        <MenuList
          sx={{
            '& p': { textAlign: 'center', color: 'GrayText', pb: '10px', borderBottom: '1px solid', borderColor: accenttext },
          }}
          bg={background}>
          <MenuOptionGroup mx="0" title={`Actions`}>
            <MenuItem>
              <Text as="span" fontWeight="extrabold" _hover={{ opacity: 0.5 }}>
                View
              </Text>
            </MenuItem>
            <MenuItem>
              <Text as="span" fontWeight="extrabold" _hover={{ opacity: 0.5 }} bg="transparent">
                Edit
              </Text>
            </MenuItem>
            <MenuItem>
              <Text
                as="span"
                fontWeight="extrabold"
                color="red"
                _hover={{ opacity: 0.5 }}
                onClick={() => {
                  setSelectedId(tour.id)
                  setOpenModal(true)
                }}>
                Delete
              </Text>
            </MenuItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Grid>
  )
}
