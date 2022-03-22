import createPalette from './createPalette'
import { Theme } from './styles.type'

export const palette = createPalette()

const defaultTheme: Theme = {
  palette,
}

export default defaultTheme
