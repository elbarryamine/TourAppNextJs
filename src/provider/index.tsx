import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { AppProps } from 'next/app'
import theme from '../config/theme'
import { Provider } from 'react-redux'
import store from 'redux/store'

type Props = {
  children: React.ReactChild | React.ReactChild[]
  router: AppProps['router']
}
export default function AppProvider({ children, router }: Props) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames="swap" timeout={300}>
            {children}
          </CSSTransition>
        </SwitchTransition>
      </ChakraProvider>
    </Provider>
  )
}
