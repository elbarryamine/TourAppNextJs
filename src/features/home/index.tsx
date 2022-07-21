import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from './layouts/Header'
import Offers from './layouts/Offers'
import Experience from './layouts/Experience'
import StartSection from './layouts/Start'
import { useResponsive } from '@shared/hooks/useResponsive'

export default function HomePage() {
  const { lessthan1000 } = useResponsive()
  return (
    <Stack spacing={lessthan1000 ? '32' : '60'} bg="color_light" color="color_dark" py="50px">
      <Header />
      <Offers />
      <Experience />
      <StartSection />
    </Stack>
  )
}
