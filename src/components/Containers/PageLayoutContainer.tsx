import React from 'react'

import { Container, ContainerProps } from '@chakra-ui/react'

export default function PageLayoutContainer(props: ContainerProps) {
  return <Container maxW="container.xl" py="70px" {...props} />
}
