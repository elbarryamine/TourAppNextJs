import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from './Layouts/Header'
import Offers from './Layouts/Offers'
import Experience from './Layouts/Experience'
import StartSection from './Layouts/Start'
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
