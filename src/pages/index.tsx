import { Navigation } from 'components'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Tourlek | Home </title>
      </Head>
      <Box
        w="100%"
        h="600px"
        bgGradient="linear-gradient(60deg, rgba(255,246,246,1) 0%, rgba(255,246,246,1) 60%, rgba(255,255,255,1) 100%);">
        <Navigation />
        <Flex justify="space-between" mt={20} marginInline={12}>
          <Box mr={20}>
            <Heading as="h1" size="4xl" fontFamily="system-ui" color="#181418">
              {"It's a Big World\n Out There, Go Explore 🚀"}
            </Heading>
            <Heading as="h6" size="md" color="#474553" mt={12}>
              We always make our customer happy by providing as many choses as possible
            </Heading>
          </Box>
          <Box>
            <Image src="assets/Camel-walk-cycle-animation.gif" alt="" w="900px" />
          </Box>
        </Flex>
      </Box>
    </Fragment>
  )
}
