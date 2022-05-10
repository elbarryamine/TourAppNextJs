import React from 'react'
import { Flex, InputGroup, Input, InputRightElement, Icon, InputLeftElement } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export default function Search() {
  const [value, setValue] = React.useState<string>('')
  return (
    <Flex py="20px" align="center" justify="center">
      <InputGroup maxW="500px">
        <InputLeftElement h="100%">
          <Icon as={AiOutlineSearch} color="primary.10" />
        </InputLeftElement>
        {value && (
          <InputRightElement h="100%" onClick={() => setValue('')} cursor="pointer">
            <Icon as={AiOutlineClose} color="primary.10" />
          </InputRightElement>
        )}
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          bg="white"
          border="1px"
          borderColor="primary.10"
          fontWeight="100"
          fontSize="body"
          _hover={{}}
          _focus={{
            ouline: '5px solid',
            oulineColor: 'primary',
          }}
          _placeholder={{ '&': { color: 'GrayText', fontSize: 'xs', fontWeight: '100' } }}
          placeholder="Search for an adventure ..."
        />
      </InputGroup>
    </Flex>
  )
}
