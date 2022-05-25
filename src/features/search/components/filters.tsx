import React from 'react'
import { Icon, InputGroup, Input, InputRightElement, InputLeftElement, Text, Checkbox, Stack, Heading } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export default function Filters() {
  const [value, setValue] = React.useState<string>('')

  return (
    <InputGroup maxW="500px">
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
  )
}
