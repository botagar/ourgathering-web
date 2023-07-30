import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <NavList>
      <NavLinkContainer>
        <NavLink to='/help'>
          Tutorials
        </NavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <NavLink to='/help'>
          Help
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
