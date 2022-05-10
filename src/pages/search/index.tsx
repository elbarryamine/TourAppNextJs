import SearchPage from 'features/search'
import Head from 'next/head'
import React from 'react'

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
