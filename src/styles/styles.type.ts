import 'styled-components'

export interface Palette {
  background: string
  text: string
}

export type Theme = {
  palette: Palette
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
