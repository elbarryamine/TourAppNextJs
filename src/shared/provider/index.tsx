import React, { Fragment } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { AppProps } from 'next/app'
import { theme } from '../utils/theme'
import { Provider } from 'react-redux'
import store from '@redux/store'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

type Props = {
  children: React.ReactNode
  router: AppProps['router']
}
const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_END_POINT}/graphql`,
  credentials: 'include',
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
export default function AppProvider({ children, router }: Props) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <SwitchTransition mode="out-in">
            <CSSTransition key={router.pathname} classNames="swap" timeout={400}>
              <Fragment>{children}</Fragment>
            </CSSTransition>
          </SwitchTransition>
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  )
}
