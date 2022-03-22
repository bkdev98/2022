import { Palette } from './styles.type'

const colors = {
  mono14: 'hsl(197, 10%, 14%)',
  mono19: 'hsl(200, 9%, 19%)',
  mono43: 'hsl(197, 10%, 43%)',
  mono86: 'hsl(17, 10%, 86%)',
  mono88: 'hsl(0, 5%, 88%)',
  mono96: 'hsl(0, 0%, 96%)',
}

const createPalette = (): Palette => ({
  background: colors.mono14,
  textPrimary: colors.mono86,
  textSecondary: colors.mono43,
  contrast: colors.mono96,
  magBackground: colors.mono19,
})

export default createPalette
