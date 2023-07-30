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
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`
const NavLinkContainer = styled.li`
  border: 2px solid black;
  border-radius: 5px;
  background: white;
  margin-left: 10px;
  padding: 5px 10px;
  min-width: 80px;
  width: 6.5vw;
  text-align: center;

  transition-duration: 0.4s;

  &:hover {
    background-color: rgb(12, 100, 115);

    a {
      color: white;
    }
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`
export { NavBar }
