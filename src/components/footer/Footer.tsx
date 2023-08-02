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
  background-color: black;
  height: 5em;
  max-height: 5vh;
`
const P = styled.p`
    color: white;
`

export { Footer }
