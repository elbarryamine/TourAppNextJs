import React from 'react'
import { Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useChakraTheme } from 'hooks/usetheme'
import { FaSearch } from 'react-icons/fa'

type PropsTourSearch = {
  hide?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>
  value: string
  activeCategory: string
  categories: string[]
}

export function TourSearch({ hide, onChange, onCategoryChange, value, activeCategory, categories }: PropsTourSearch) {
  const { text, primary, background } = useChakraTheme()
  const categoriesArr = categories.length ? ['All', ...categories] : []
  return (
    <Flex visibility={hide ? 'hidden' : 'visible'} borderRadius="10px" my="10px" justify="space-between">
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
          placeholder={activeCategory === 'All' ? 'Search for a tour' : `Search for a ${activeCategory.toLowerCase()} tour...`}
        />
      </InputGroup>
    </Flex>
  )
}
