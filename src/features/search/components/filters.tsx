import React from 'react'
import { Flex, Icon, InputGroup, Input, InputRightElement, InputLeftElement, Text, Checkbox, Stack, Heading } from '@chakra-ui/react'
import { IoGridOutline } from 'react-icons/io5'
import { AiOutlineSortAscending, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export default function Filters() {
  const [value, setValue] = React.useState<string>('')

  return (
    <Flex px="20px" justify="space-between">
      <Flex gap="10px">
        <InputGroup flex="1 0 500px">
          <InputLeftElement h="100%">
            <Icon as={AiOutlineSearch} color="main_color_2" />
          </InputLeftElement>
          {value && (
            <InputRightElement h="100%" onClick={() => setValue('')} cursor="pointer">
              <Icon as={AiOutlineClose} color="main_color_2" />
            </InputRightElement>
          )}
          <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            bg="white"
            border="1px"
            borderColor="main_color_2"
            fontWeight="100"
            fontSize="body"
            _hover={{}}
            _focus={{
              ouline: '5px solid',
              oulineColor: 'primary',
            }}
            _placeholder={{ '&': { color: 'GrayText', fontSize: 'sm', fontWeight: '100' } }}
            placeholder="Search for an adventure ..."
          />
        </InputGroup>
      </Flex>

      <Flex align="center" gap="20px" color="main_color_2">
        <Flex gap="10px" align="center">
          <Text fontSize="sm">Layout</Text>
          <Icon as={IoGridOutline} _hover={{ color: 'main_color_2' }} />
        </Flex>
        <Flex gap="10px" align="center">
          <Text fontSize="sm">Sort By</Text>
          <Icon as={AiOutlineSortAscending} _hover={{ color: 'main_color_2' }} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export function SideFilters() {
  const categoriesArr = ['All', 'Quad', 'Biking', 'Beach']
  const locations = ['Marrakech', 'Agadir', 'Fes', 'Essaouira']
  const [activeCategory, setActiveCategory] = React.useState<string>('')
  const [activeLocation, setActiveLocation] = React.useState<string>('')
  function resetFilter() {
    setActiveCategory('')
    setActiveLocation('')
  }
  return (
    <Stack p="20px" spacing={5} color="main_dark" bg="main_light" border="1px solid" borderColor="whitesmoke" borderRadius="5px">
      <Flex justify="space-between">
        <Heading size="sm">Filter By</Heading>
        <Heading size="xs" color="green.500" cursor="pointer" onClick={resetFilter}>
          Reset Filters
        </Heading>
      </Flex>
      <Stack>
        <Text fontSize="sm" fontWeight={400} textTransform="uppercase">
          type
        </Text>
        <Stack spacing={2}>
          {categoriesArr.map((categ) => (
            <Checkbox
              key={categ}
              isChecked={categ === activeCategory}
              onChange={() => setActiveCategory(categ)}
              value={`${categ.toLowerCase().replace(/ /g, '')}`}
              fontFamily="rale"
              sx={{ 'input + span[data-checked]': { bg: 'main_color_2', borderColor: 'main_color_2' } }}>
              <Text fontWeight={900} fontSize="xs" color={activeCategory == categ ? 'main_color_2' : 'main_dark'}>
                {categ}
              </Text>
            </Checkbox>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="sm" fontWeight={400} textTransform="uppercase">
          location
        </Text>
        <Stack spacing={2}>
          {locations.map((location) => (
            <Checkbox
              key={location}
              isChecked={activeLocation == location}
              onChange={() => setActiveLocation(location)}
              value={`${location.toLowerCase().replace(/ /g, '')}`}
              fontFamily="rale"
              sx={{ 'input + span[data-checked]': { bg: 'main_color_2', borderColor: 'main_color_2' } }}>
              <Text fontWeight={900} fontSize="xs" color={activeLocation == location ? 'main_color_2' : 'main_dark'}>
                {location}
              </Text>
            </Checkbox>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
