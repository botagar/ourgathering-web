import { ErrorBoundary, Footer, Header, LanguagePickerBar } from 'components'
import { FC, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'router/Router'
import styled, { ThemeProvider } from 'styled-components'

import background from './static/backgrounds/ww.jpg'

const App: FC = (): ReactElement => {
  const page = useRoutes(routes)

  return (
    <ErrorBoundary>
      <ThemeProvider theme={{}}>
        <AppContainer>
          <LanguagePickerBar />
          <Header />
          {page}
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95%;

  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`

export { App }
