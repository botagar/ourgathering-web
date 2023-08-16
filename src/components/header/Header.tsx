import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { NavBar } from './NavBar'

const Header: FC = (): ReactElement => {
  return (
    <HeaderRow>
      <LogoLink to='/'>
        <LogoText>OG</LogoText>
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
const LogoText = styled.h1`
  font-size: 4em;
  text-align: center;
  font-family: 'Borel', cursive;
  color: rgb(238, 74, 74);
  text-shadow: 2px 2px rgba(0,0,0,1);
  margin-top: 15px;

  @media only screen and (${({ theme }) => theme.screenBreaks.phone}) {
    line-height: 1.2em;
    font-size: 3em;
  }
`
const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
`

export { Header }
