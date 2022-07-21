import React from 'react'
import Head from 'next/head'
import SingleTourPage from '@features/singleTour'

export default function SingleTour() {
  return (
    <>
      <Head>
        <title>Tourlek | Search</title>
      </Head>
      <SingleTourPage />
    </>
  )
}
