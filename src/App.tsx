import { AppStyles, ErrorBoundary, Footer, Header, LanguagePickerBar } from 'components'
import { FC, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'router/Router'
import styled from 'styled-components'
import { Themes } from 'components/app-styles/Themes'

import background from './static/backgrounds/night_full_moon.png'

const App: FC = (): ReactElement => {
  const page = useRoutes(routes)

  return (
    <ErrorBoundary>
      <Themes>
        <AppStyles />
        <AppContainer>
          <HeaderRow />
          {page}
          <Footer />
        </AppContainer>
      </Themes>
    </ErrorBoundary>
  )
}

const HeaderRow: FC = (): ReactElement =>
  <HeaderContainer>
    <LanguagePickerBar />
    <Header />
  </HeaderContainer>

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  justify-content: space-between;

  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`
const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

export { App }
