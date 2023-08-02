import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const NavBar: FC = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <NavList>
      <NavLinkContainer>
        <NavLink to='/help'>
          {t('header:nav_tutorials')}
        </NavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <NavLink to='/help'>
          {t('header:nav_help')}
        </NavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <NavLink to='/gathering/gatheringid/testid/authtoken'>
          test gathering
        </NavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <NavLink to='/manage/testid/authtoken'>
          test overview
        </NavLink>
      </NavLinkContainer>
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`
const NavLinkContainer = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 10px;
  min-width: 70px;
  max-width: 150px;
  width: 6.5vw;
  color: white;
  
  transition-duration: 0.4s;

  a {
    padding: 0 5px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);

    a {
      color: white;
      font-weight: bold;
    }
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`
export { NavBar }
