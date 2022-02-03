import React from 'react'
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { useChakraTheme } from 'config/hooks/usetheme'
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'

export function ToursPageTable() {
  const { background, accenttext, text } = useChakraTheme()

  const ui = {
    tmpColumns: '300px repeat(3, 1fr) 200px',
  }
  return (
    <Box mt="20px">
      <Box p="20px" borderRadius="10px" bg={background}>
        <Grid templateColumns={ui.tmpColumns} placeItems="center">
          <Box>Overview</Box>
          <Box>Trip Length</Box>
          <Box>Host</Box>
          <Box>Price</Box>
          <Box>Actions</Box>
        </Grid>
        <Grid pt="20px" borderRadius="10px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="2px"
              w="30%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline">Ouzoud Tour</Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Text>2h</Text>
          <Text>Hamid</Text>
          <Text>20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
        <Grid pt="20px" borderRadius="10px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="2px"
              w="30%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline">Ouzoud Tour</Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Text>2h</Text>
          <Text>Hamid</Text>
          <Text>20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
        <Grid pt="20px" borderRadius="10px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="2px"
              w="30%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline">Ouzoud Tour</Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Text>2h</Text>
          <Text>Hamid</Text>
          <Text>20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
        <Grid pt="20px" borderRadius="10px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="2px"
              w="30%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline">Ouzoud Tour</Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Text>2h</Text>
          <Text>Hamid</Text>
          <Text>20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
        <Grid pt="20px" borderRadius="10px" templateColumns={ui.tmpColumns} placeItems="center">
          <Flex gap="15px" align="center">
            <Image
              borderRadius="2px"
              w="30%"
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Tour"
            />
            <Box>
              <Text fontSize="headline">Ouzoud Tour</Text>
              <Flex color="orange">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </Flex>
            </Box>
          </Flex>
          <Text>2h</Text>
          <Text>Hamid</Text>
          <Text>20 £</Text>
          <Flex gap="10px">
            <Button fontSize="sub" h="max-content" py="10px" bg="green.100" color="green.500">
              Edit
            </Button>
            <Button fontSize="sub" h="max-content" py="10px" bg="red.100" color="red.500">
              Delete
            </Button>
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}
