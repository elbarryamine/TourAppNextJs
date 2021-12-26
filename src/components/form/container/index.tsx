import React from 'react'
import { Box as Bx, Image } from '@chakra-ui/react'
type Props = {
  children: React.ReactChild
}
export function FormContainer({ children }: Props) {
  return (
    <Bx h="100vh" w="100vw" d="flex" justifyContent="center" alignItems="center">
      <Image
        h="100vh"
        flex="1"
        src="https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="svg"
        objectFit="cover"
        objectPosition="20% center"
      />
      <Bx d="flex" px="20px" h="max-content" w="max-content" minW="35%">
        {children}
      </Bx>
    </Bx>
  )
}
