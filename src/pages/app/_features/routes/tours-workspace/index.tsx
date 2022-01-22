import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function ToursWorkSpace() {
  return (
    <Box
      d="flex"
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      gap="10px"
      className="parent"
      __css={{
        '& button:hover': {
          transform: 'scale(1.1)',
          bg: 'light',
          color: 'primary',
          border: '1px solid',
          borderColor: 'primary',
        },
      }}>
      <Link to="create">
        <Button _focus={{}} bg="primary" color="light" shadow="lg">
          Create a new tour
        </Button>
      </Link>
      <Link to="edit">
        <Button _focus={{}} bg="primary" color="light" shadow="lg">
          Edit your tours
        </Button>
      </Link>
      <Link to="track">
        <Button _focus={{}} bg="primary" color="light" shadow="lg">
          Track your tour workflow
        </Button>
      </Link>
    </Box>
  )
}
