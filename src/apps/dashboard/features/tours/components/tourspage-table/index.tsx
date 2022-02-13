import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { TableContent, TableHead, TableToursFinder } from './components'

export const ui = {
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
