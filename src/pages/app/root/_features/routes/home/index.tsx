import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export function Home() {
    return (
        <Box color="white" h="100%" w="100%">
            <Link to="/home" color="white">
                Go to home
            </Link>
        </Box>
    )
}
