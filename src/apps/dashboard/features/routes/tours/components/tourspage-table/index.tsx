import React from 'react'
import { Avatar, Box, Button, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaSearch, FaStar, FaStarHalfAlt } from 'react-icons/fa'

export function ToursPageTable() {
  const { background, text, accenttext, subtext, primary, overPrimary } = useChakraTheme()

  const ui = {
    tmpColumns: '250px 2fr 1fr 1fr 250px',
  }
  return (
    <Flex flexDir="column">
      <Flex borderRadius="10px" my="20px" py="5px" justify="space-between" px="10px">
        <Flex
          sx={{
            '& button': { h: 'max-content', fontSize: 'body', bg: 'transparent', fontWeight: 'normal', color: text },
            '.active': { color: primary, fontWeight: 'extrabold' },
          }}
          w="max-content"
          align="center">
          <Button className="active" _hover={{ textDecoration: 'underline' }} _focus={{}} _active={{}}>
            Quad
          </Button>
          <Button _hover={{ textDecoration: 'underline' }} _focus={{}} _active={{}}>
            Beach
          </Button>
          <Button _hover={{ textDecoration: 'underline' }} _focus={{}} _active={{}}>
            Hiking
          </Button>
        </Flex>
        <InputGroup maxW="500px">
          <InputLeftElement h="100%" color="black">
            <FaSearch size="14px" />
          </InputLeftElement>
          <Input
            borderRadius="15px"
            bg={overPrimary}
            color={text}
            border="0"
            fontWeight="extrabold"
            fontSize="body"
            _hover={{ '&:hover::placeholder': { color: text } }}
            _focus={{
              ouline: '5px solid',
              oulineColor: 'primary',
            }}
            _placeholder={{ '&': { color: subtext, fontSize: 'sm', fontWeight: 'extrabold' } }}
            placeholder="Search for a tour..."
          />
        </InputGroup>
      </Flex>

      <Box shadow="2xl" color={text} border="1px solid" borderColor={accenttext} borderRadius="10px" overflow="hidden">
        <Grid
          bg={background}
          templateColumns={ui.tmpColumns}
          placeItems="center"
          p="20px"
          sx={{ '.tableHeader': { fontWeight: 'bold', fontSize: 'headline' } }}>
          <Box className="tableHeader">Overview</Box>
          <Box className="tableHeader">Host</Box>
          <Box className="tableHeader">Trip Length</Box>
          <Box className="tableHeader">Price</Box>
          <Box className="tableHeader">Actions</Box>
        </Grid>
        <Grid p="20px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="10px"
              w="25%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline" fontWeight="extrabold">
                Ouzoud Tour
              </Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Flex align="center" gap="10px">
            <Avatar cursor="pointer" name="Christian Nwamba" size="sm" src="https://bit.ly/code-beast" />
            <Text fontWeight="extrabold">Hamid</Text>
          </Flex>
          <Text fontWeight="extrabold">2h</Text>
          <Text fontWeight="extrabold">20 £</Text>
          <Flex gap="10px" sx={{ '& button': { w: 'calc(190px / 3)', py: '10px', fontSize: 'sub' } }}>
            <Button _focus={{}} _hover={{ bg: 'blue.200' }} bg="blue.100" color="blue.500">
              View
            </Button>
            <Button _focus={{}} _hover={{ bg: 'green.200' }} bg="green.100" color="green.500">
              Edit
            </Button>
            <Button _focus={{}} _hover={{ bg: 'red.200' }} bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  )
}
