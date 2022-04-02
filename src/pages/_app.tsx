import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Header from '@components/Layout/Header'
import { defaultTheme, GlobalStyle } from '@styles'
import useScrollRestoration from '@utils/useScrollRestoration'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useScrollRestoration(router)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AnimatePresence>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
