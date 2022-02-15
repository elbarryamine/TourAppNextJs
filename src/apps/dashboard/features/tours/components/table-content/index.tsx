import React, { Fragment } from 'react'
import { Box, Button, Checkbox, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { FaRegFrown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Pagination, Rating } from 'apps/dashboard/components'
import { useSearchParams, useLocation } from 'react-router-dom'
import qr from 'query-string'
import { ModalMessage } from 'components/modal'
import { gql, useMutation } from '@apollo/client'
import { deleteTour } from 'redux/reducers/tours'
import { ui } from 'utils/ui'

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
export function TableContent({ tours, isSearching }: PropsTableContent) {
  const setSearchParams = useSearchParams()[1]
  const { search } = useLocation()
  const dispatch = useDispatch()
  const [isModalOpen, setOpenModal] = React.useState<boolean>(false)
  const [selectedIdsOfTours, setSelectedIdsOfTours] = React.useState<string[]>([])
  const [selectedId, setSelectedId] = React.useState<string>('')
  const [runDeleteSingleTour, { loading, data }] = useMutation(QUERYDELETESINGLE)
  const [pageCount, setPageCount] = React.useState<number>(0)
  const [itemOffset, setItemOffset] = React.useState<number>(0)
  const [displayedTours, setDisplayedTours] = React.useState<Tour[]>(tours.slice())
  const { text, background, accenttext } = useChakraTheme()

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
  return (
    <Box pos="relative">
      <Grid
        bg={background}
        templateColumns={ui.tmpColumns}
        placeItems="center"
        p="15px"
        sx={{ '.tableHeader': { fontWeight: 'semibold', fontSize: 'body' } }}
        color={text}
        border="1px solid"
        borderBottom="0"
        borderColor={accenttext}
        overflow="hidden"
        pos="relative">
        {selectedIdsOfTours.length ? (
          <Flex pos="absolute" top="0" right="20px" w="100%" h="100%" align="center" justify="flex-end" bg={background} gap="10px">
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
        <Box />
        <Box className="tableHeader">Overview</Box>
        <Box className="tableHeader">Trip Length</Box>
        <Box className="tableHeader">Price</Box>
        <Box className="tableHeader">Actions</Box>
      </Grid>
      <Box overflow="hidden" border="1px solid" borderBottom="0" borderColor={accenttext} bg={background}>
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
            <Box maxH="50vh" overflowY="auto">
              {displayedTours.map((tour) => (
                <Grid key={tour.id} p="10px" templateColumns={ui.tmpColumns} placeItems="center">
                  <Box w="max-content" mx="auto">
                    <Checkbox
                      onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleChecked(value, tour.id)}
                      borderColor={text}
                      isChecked={selectedIdsOfTours.includes(tour.id) ? true : false}
                    />
                  </Box>
                  <Flex cursor="pointer" onClick={() => {}} gap="15px" align="center">
                    <Image borderRadius="0px" w="15%" src={tour.mainImage} alt="Tour" />
                    <Box>
                      <Text fontSize="headline" fontWeight="bold">
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
                          This tour will be removed
                        </Text>
                      </Box>
                    ) : null
                  ) : (
                    <Flex gap="10px" sx={{ '& button': { w: 'calc(190px / 3)', py: '10px', fontSize: 'sub' } }}>
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
          </Fragment>
        )}
      </Box>
      <Pagination initialPage={Number(qr.parse(search).page) - 1 || 0} pageCount={pageCount} handlePageClick={handlePageClick} />
    </Box>
  )
}
