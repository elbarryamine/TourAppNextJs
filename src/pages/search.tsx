import React from 'react'
import Head from 'next/head'
import SearchPage from 'features/search'

export default function Page() {
  return (
    <>
      <Head>
        <title>Tourlek | Search</title>
      </Head>
      <SearchPage />
    </>
  )
}
