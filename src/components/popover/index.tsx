import React from 'react'
import { Popover as Pop, PopoverContent, PopoverHeader, PopoverBody, Box } from '@chakra-ui/react'

export function Popover(props: { state: boolean; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) {
  return (
    <Box color="black">
      <Pop isOpen={props.state}>
        <PopoverContent>{props.children}</PopoverContent>
      </Pop>
    </Box>
  )
}

Popover.Title = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
  return <PopoverHeader>{props.children}</PopoverHeader>
}
Popover.Body = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
  return <PopoverBody>{props.children}</PopoverBody>
}
