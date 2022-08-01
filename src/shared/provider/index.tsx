import React, { Fragment } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@redux/store'
import CustomChakraProvider from './ChakraProvider'
import ApolloProviderWrapper from './ApolloProvider'

type Props = {
  children: React.ReactNode
  router: AppProps['router']
}

export default function AppProvider({ children, router }: Props) {
  return (
    <ApolloProviderWrapper>
      <Provider store={store}>
        <CustomChakraProvider>
          <SwitchTransition mode="out-in">
            <CSSTransition key={router.pathname} classNames="swap" timeout={400}>
              <Fragment>{children}</Fragment>
            </CSSTransition>
          </SwitchTransition>
        </CustomChakraProvider>
      </Provider>
    </ApolloProviderWrapper>
  )
}
