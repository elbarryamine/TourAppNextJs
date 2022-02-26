import React, { Fragment } from 'react'
import { Stats } from '../components'
export function Home() {
  return (
    <Fragment>
      <Stats />
      <ToursCards title="Latest added tours" tours={[]} />
      <ToursCards title="Most viewed tours" tours={[]} />
    </Fragment>
  )
}

type PropsToursCards = {
  tours: Array<Tour>
  title: string
}
function ToursCards({ tours, title }: PropsToursCards) {
  return null
}
