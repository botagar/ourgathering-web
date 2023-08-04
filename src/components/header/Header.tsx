import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoImage from 'src/static/logo.jpg'
import { NavBar } from './NavBar'

const Header: FC = (): ReactElement => {
  return (
    <HeaderRow>
      <LogoLink to='/'>
        <Logo src={LogoImage} alt='logo' />
      </LogoLink>
      <NavBar />
    </HeaderRow>
  )
}

const HeaderRow = styled.div`
  display: flex;
  height: 5em;

  @media only screen and (max-width: 820px){}
`
const Logo = styled.img`
  display: block;
  max-width: 230px;
  max-height: 230px;
  width: auto;
  height: auto;
`
const LogoLink = styled(Link)`
  display: flex;
  width: 85px;
`

export { Header }
