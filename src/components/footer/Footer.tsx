import { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Footer: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <FooterRow>
      <P>About</P>
    </FooterRow>
  )
}

const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 5vh;
  min-height: 50px;
`
const P = styled.p`
    color: white;
`

export { Footer }
