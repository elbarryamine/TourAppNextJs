import React, { ReactNode } from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_END_POINT}/graphql`,
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
export default function ApolloProviderWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
