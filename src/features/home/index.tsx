import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from './layouts/Header'
import Offers from './layouts/Offers'
import Experience from './layouts/Experience'
import StartSection from './layouts/Start'
import { useResponsive } from '@shared/hooks/useResponsive'
import TopDestination from './layouts/TopDestination'

export default function HomePage() {
  const { lessthan1000 } = useResponsive()
  return (
    <Stack
      spacing={lessthan1000 ? '32' : '60'}
      bgGradient="linear-gradient(86.08deg, #FFF7F7 6.42%, #FDF7FA 45.67%, #F5F4FF 69.09%, rgba(245, 244, 255, 0.49) 100%), linear-gradient(58.7deg, #FFF7F7 23.13%, #FDF7FA 52.7%, #FAF6FC 61.18%, #F5F4FF 68.68%, rgba(245, 244, 255, 0.49) 85.31%), linear-gradient(180.08deg, rgba(255, 247, 247, 0.49) 72.31%, #FAF6FC 85.99%, #F5F4FF 99.96%)"
      color="color_dark"
      pb="50px">
      <Header />
      <Offers />
      <TopDestination />
      <Experience />
      <StartSection />
    </Stack>
  )
}
