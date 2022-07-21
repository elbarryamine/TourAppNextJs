import React from 'react'
import Head from 'next/head'
import HomePage from '@features/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tourlek | Home </title>
      </Head>
      <HomePage />
    </>
  )
}
