import { Dispatch, FC, PropsWithChildren, ReactElement, SetStateAction, createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

enum ColorThemes {
  LIGHT = 'light',
  DARK = 'dark'
}

interface AppTheme {
  currentColorTheme: ColorThemes
  setCurrentColorTheme: Dispatch<SetStateAction<ColorThemes>>
}

const ThemePreferenceContext = createContext<AppTheme>({
  currentColorTheme: ColorThemes.LIGHT,
  setCurrentColorTheme: () => {}
})

const Themes: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const [currentColorTheme, setCurrentColorTheme] = useState<ColorThemes>(ColorThemes.LIGHT)

  const baseTheme = {
    fontSizes: {
      hero: '4em'
    },
    screenBreaks: {
      phone: 'max-width: 820px',
      tablet: 'max-width: 1080px'
    }
  }
  const colorThemes = {
    light: {},
    dark: {}
  }
  const theme = {
    ...baseTheme,
    colors: colorThemes[currentColorTheme]
  }

  useEffect(() => {
    console.log(`Setting theme to ${currentColorTheme}`)
  }, [currentColorTheme])

  return (
    <ThemePreferenceContext.Provider value={{ currentColorTheme, setCurrentColorTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  )
}

export {
  Themes,
  ThemePreferenceContext,
  ColorThemes
}
