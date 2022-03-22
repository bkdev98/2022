import createPalette from './createPalette'
import createSizes from './createSizes'
import { Theme } from './styles.type'

export const palette = createPalette()

export const sizes = createSizes()

const defaultTheme: Theme = {
  palette,
  sizes,
}

export default defaultTheme
