import 'styled-components'

declare module 'styled-components' {
  export interface ColorTheme {
    bgColor1: string
  }
  export interface DefaultTheme {
    fontSizes: {
      hero: string
    }
    screenBreaks: {
      phone: string
      tablet: string
    }
    colors: ColorTheme
  }
}
