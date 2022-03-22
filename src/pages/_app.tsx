import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from '@styles'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
