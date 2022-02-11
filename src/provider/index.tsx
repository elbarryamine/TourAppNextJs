import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { AppProps } from 'next/app'
import theme from '../config/theme'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'

type Props = {
  children: React.ReactChild | React.ReactChild[]
  router: AppProps['router']
}
const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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
              {children}
            </CSSTransition>
          </SwitchTransition>
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  )
}
