import React from 'react'
import { Popover as Pop, PopoverContent, PopoverHeader, PopoverBody, Box } from '@chakra-ui/react'

export function Popover(props) {
  return (
    <Box color="black">
      <Pop isOpen={props.state}>
        <PopoverContent>{props.children}</PopoverContent>
      </Pop>
    </Box>
  )
}

Popover.Title = (props) => {
  return <PopoverHeader>{props.children}</PopoverHeader>
}
Popover.Body = (props) => {
  return <PopoverBody>{props.children}</PopoverBody>
}
