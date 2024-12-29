import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import type React from 'react'
import { theme } from '../styles/theme.ts'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
