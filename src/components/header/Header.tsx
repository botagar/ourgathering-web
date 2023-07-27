import { FC, ReactElement } from 'react'
import styled from 'styled-components'

import LogoImage from 'src/static/logo.jpg'
import { NavBar } from './NavBar'

const Header: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <HeaderRow aria-role='banner'>
      <Logo src={LogoImage} alt='logo' aria-role='img' />
      <NavBar />
    </HeaderRow>
  )
}

const HeaderRow = styled.div`
  display: flex;
  height: 10em;
  max-height: 5vh;
`
const Logo = styled.img`
  display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
`

export { Header }
