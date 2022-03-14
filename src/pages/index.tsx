import { Flex, FlexProps, Input, InputProps } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Flex {...ctx.container}>
      <Flex {...ctx.view}>
        <Input {...(ctx.input, { bg: 'red' })} />
      </Flex>
    </Flex>
  )
}

const ctx = {
  container: {
    bg: 'black',
    h: '100vh',
    w: '100vw',
    align: 'center',
    justify: 'center',
  } as FlexProps,
  view: {
    justify: 'center',
    align: 'center',
  } as FlexProps,
  input: {
    placeholder: 'Search for your tour',
    bg: 'white',
  } as InputProps,
}
