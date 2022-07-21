import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from './components/header'
import Offers from './components/offers'
import Experience from './components/experience'
import StartSection from './components/start'
import { useResponsive } from 'common/hooks/useResponsive'

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
