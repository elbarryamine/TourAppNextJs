import React from 'react'
import Head from 'next/head'

import BrowsePage from '@features/browse'

export default function Browse() {
  return (
    <>
      <Head>
        <title>Tourlek | Browse</title>
      </Head>
      <BrowsePage />
    </>
  )
}
