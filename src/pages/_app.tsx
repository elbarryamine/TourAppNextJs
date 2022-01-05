import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'
import '@fontsource/raleway'
import '../styles/transition.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <SwitchTransition mode="out-in">
                <CSSTransition key={router.pathname} classNames="swap" timeout={300}>
                    <>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</>
                </CSSTransition>
            </SwitchTransition>
        </ChakraProvider>
    )
}

export default MyApp
