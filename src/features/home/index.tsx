import React from 'react'
import { Stack } from '@chakra-ui/react'
import Header from './layouts/Header'
import Offers from './layouts/Offers'
import Experience from './layouts/Experience'
import StartSection from './layouts/Start'
import TopDestination from './layouts/TopDestination'
import PageLayoutContainer from '@components/Containers/PageLayoutContainer'

export default function HomePage() {
  return (
    <Stack
      spacing={24}
      bgGradient="linear-gradient(86.08deg, #FFF7F7 6.42%, #FDF7FA 45.67%, #F5F4FF 69.09%, rgba(245, 244, 255, 0.49) 100%), linear-gradient(58.7deg, #FFF7F7 23.13%, #FDF7FA 52.7%, #FAF6FC 61.18%, #F5F4FF 68.68%, rgba(245, 244, 255, 0.49) 85.31%), linear-gradient(180.08deg, rgba(255, 247, 247, 0.49) 72.31%, #FAF6FC 85.99%, #F5F4FF 99.96%)">
      <PageLayoutContainer>
        <Header />
        <Offers />
        <TopDestination />
        <Experience />
        <StartSection />
      </PageLayoutContainer>
    </Stack>
  )
}
