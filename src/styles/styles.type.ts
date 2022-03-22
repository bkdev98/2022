import 'styled-components'

export interface Palette {
  textPrimary: string
  textSecondary: string
  background: string
  magBackground: string
  contrast: string
}

export interface Sizes {
  spacing: number
  container: number
}

export type Theme = {
  palette: Palette
  sizes: Sizes
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
