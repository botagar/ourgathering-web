import { AppStyles, ErrorBoundary, Footer, Header } from 'components'
import { FC, ReactElement } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from 'router/Router'
import styled from 'styled-components'
import { Themes } from 'components/app-styles/Themes'
import { SettingsDrawer } from 'components/header/SettingsDrawer'

import background from './static/backgrounds/night_full_moon.png'
import { US } from 'country-flag-icons/react/3x2'
import { FlagIcon } from 'components/generic/CountryFlag'
import { ToggleSwitch } from 'components/generic/ToggleSwitch'

const tempUSA = FlagIcon(US, { title: 'English', disabled: true })

const App: FC = (): ReactElement => {
  const page = useRoutes(routes)

  return (
    <ErrorBoundary>
      <Themes>
        <AppStyles />
        <AppContainer>
          <SettingsDrawer isOpen={false} className='' onClose={() => console.log('Closing')}>
            <LanguagePicker>{tempUSA}</LanguagePicker>
            <ThemePicker><p>Dark</p><ToggleSwitch /><p>Light</p></ThemePicker>
          </SettingsDrawer>
          <HeaderRow />
          {page}
          <Footer />
        </AppContainer>
      </Themes>
    </ErrorBoundary>
  )
}

const LanguagePicker = styled.div`
  width: 100%;
`
const ThemePicker = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
`

const HeaderRow: FC = (): ReactElement =>
  <HeaderContainer>
    {/* <LanguagePickerBar /> */}
    <Header />
  </HeaderContainer>

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  justify-content: space-between;

  // background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`
const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

export { App }
