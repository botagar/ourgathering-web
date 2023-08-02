import { FC, ReactElement } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import { Reset } from 'styled-reset'

import montserrat from '../../static/fonts/en/Montserrat/Montserrat-VariableFont_wght.ttf'
import borel from '../../static/fonts/en/Borel/Borel-Regular.ttf'

const AppStyles: FC = (): ReactElement => {
  return (
    <>
      <Reset />
      <GlobalStyles />
    </>
  )
}

const fontFaces = css`
    @font-face {
      font-family: 'Montserrat';
      src: url('${montserrat}');
    }
    @font-face {
      font-family: 'Borel';
      src: url('${borel}');
    }
`

const fontSizing = css`
h1 {
  font-size: 2.488em;
  font-weight: bold;
} 
h2 {
  font-size: 2.074em;
  font-weight: bold;
}
h3 {
  font-size: 1.728em;
}
h4 {
  font-size: 1.44em;
}
h5 h6 {
  font-size: 1.2em;
}
p {
  font-size: 1em;
}
`

const GlobalStyles = createGlobalStyle`
    ${fontFaces}
    ${fontSizing}
    div, h1, h2, h3, h4, h5, h6, p, {
      font-family: 'Montserrat';
    }
    body {
        line-height: 1.5;
    };
  `

export { AppStyles }
