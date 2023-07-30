import { FC, ReactElement } from 'react'
import styled from 'styled-components'

import LogoImage from 'src/static/logo.jpg'
import { NavBar } from './NavBar'

const Header: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <HeaderRow aria-role='Banner'>
      <Logo src={LogoImage} alt='logo' />
      <NavBar />
    </HeaderRow>
  )
}

const HeaderRow = styled.div`
  display: flex;
  height: 5em;
`
const Logo = styled.img`
  display: block;
  max-width: 230px;
  max-height: 230px;
  width: auto;
  height: auto;
`

export { Header }
