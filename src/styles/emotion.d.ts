import type { Theme as CustomTheme } from './theme.ts'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
