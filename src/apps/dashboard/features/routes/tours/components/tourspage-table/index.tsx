import React from 'react'
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export function ToursPageTable() {
  const { background, text } = useChakraTheme()

  const ui = {
    tmpColumns: '300px repeat(3, 1fr) 200px',
  }
  return (
    <Box mt="20px">
      <Box shadow="2xl" bg={background} color={text}>
        <Grid templateColumns={ui.tmpColumns} placeItems="center" p="20px">
          <Box fontWeight="bold" fontSize="headline">
            Overview
          </Box>
          <Box fontWeight="bold" fontSize="headline">
            Trip Length
          </Box>
          <Box fontWeight="bold" fontSize="headline">
            Host
          </Box>
          <Box fontWeight="bold" fontSize="headline">
            Price
          </Box>
          <Box fontWeight="bold" fontSize="headline">
            Actions
          </Box>
        </Grid>
        <Grid p="20px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="0px"
              w="50%"
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
          <Text fontWeight="extrabold">2h</Text>
          <Text fontWeight="extrabold">Hamid</Text>
          <Text fontWeight="extrabold">20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" _hover={{ bg: 'green.200' }} bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" _hover={{ bg: 'red.200' }} bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}
