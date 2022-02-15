import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import ReactPaginate from 'react-paginate'

type Props = {
  // eslint-disable-next-line no-unused-vars
  handlePageClick(selectedItem: { selected: number }): void
  initialPage: number
  pageCount: number
}
export function Pagination({ handlePageClick, initialPage, pageCount }: Props) {
  const { text, background, subtext, overPrimary, primary } = useChakraTheme()
  return (
    <Flex
      visibility={pageCount > 1 ? 'visible' : 'hidden'}
      py="20px"
      borderRadius="10px"
      zIndex="10"
      mt="6px"
      align="center"
      justify="flex-end"
      fontWeight="extrabold"
      sx={{
        '.page': {
          bg: background,
          color: text,
          '& a': {
            fontWeight: 'extrabold',
            px: '10px',
            h: '100%',
            d: 'flex',
            alignItems: 'center',
            '&:hover': { bg: subtext, color: background },
          },
        },
        '.page-active': {
          bg: primary,
          color: overPrimary,
        },
        '.container': { d: 'flex', gap: '10px', listStyle: 'none', fontWeight: 'extrabold' },
      }}>
      <ReactPaginate
        activeClassName="page-active"
        className="container"
        pageClassName="page"
        pageRangeDisplayed={5}
        previousLabel={
          <Button _focus={{}} _active={{}} _hover={{ bg: subtext, color: background }} bg={background} color={text} w="5px">
            {`<`}
          </Button>
        }
        breakLabel="..."
        forcePage={initialPage}
        nextLabel={
          <Button _focus={{}} _active={{}} _hover={{ bg: subtext, color: background }} bg={background} color={text} w="5px">
            {`>`}
          </Button>
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </Flex>
  )
}
