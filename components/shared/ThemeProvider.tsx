'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemesProviderProps } from 'next-themes'
import { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
  attribute?: 'class' | 'data-theme'
  defaultTheme?: string
  enableSystem?: boolean
}

export default function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
}: ThemeProviderProps) {
  const nextThemesProps: NextThemesProviderProps = {
    attribute: attribute,
    defaultTheme: defaultTheme,
    enableSystem: enableSystem,
    disableTransitionOnChange: false,
  }

  return (
    <NextThemesProvider {...nextThemesProps}>
      {children}
    </NextThemesProvider>
  )
}


