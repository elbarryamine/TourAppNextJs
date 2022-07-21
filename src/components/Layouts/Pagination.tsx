import React from 'react'
import { Button, ButtonProps, Flex } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate'

type Props = {
  // eslint-disable-next-line no-unused-vars
  handlePageClick(selectedItem: { selected: number }): void
  initialPage: number
  pageCount: number
}
const PreviousAndNextButton = (props: ButtonProps) => (
  <Button _focus={{}} _active={{}} _hover={{ color: 'color_1' }} bg="color_white" color="black" w="5px" {...props} />
)
export function Pagination({ handlePageClick, initialPage, pageCount }: Props) {
  return (
    <Flex
      visibility={pageCount > 1 ? 'visible' : 'hidden'}
      py="20px"
      zIndex="10"
      mt="6px"
      align="center"
      justify="flex-end"
      fontWeight="extrabold"
      sx={{
        '.page': {
          bg: 'transparent',
          color: 'black',
          '& a': {
            fontWeight: 'extrabold',
            px: '10px',
            h: '100%',
            d: 'flex',
            alignItems: 'center',
            '&:hover': { bg: 'transparent', color: 'color_1' },
          },
        },
        '.page-active': {
          bg: 'black',
          color: 'white',
        },
        '.container': { d: 'flex', gap: '10px', listStyle: 'none', fontWeight: 'extrabold' },
      }}>
      <ReactPaginate
        activeClassName="page-active"
        className="container"
        pageClassName="page"
        pageRangeDisplayed={5}
        previousLabel={<PreviousAndNextButton>{`<`}</PreviousAndNextButton>}
        breakLabel="..."
        forcePage={initialPage}
        nextLabel={<PreviousAndNextButton>{`>`}</PreviousAndNextButton>}
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </Flex>
  )
}
