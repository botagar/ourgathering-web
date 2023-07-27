import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <NavList>
      <NavLinkContainer>
        <Link to='/help'>
          Tutorials
        </Link>
      </NavLinkContainer>
      <NavLinkContainer>
        <Link to='/help'>
          Help
        </Link>
      </NavLinkContainer>
    </NavList>
  )
}

const NavList = styled.ul`
  /* background-color: blue; */
  
  display: flex;
  list-style: none;
`
const NavLinkContainer = styled.li`
  /* background-color: green; */
  margin-left: 10px;
`
export { NavBar }
