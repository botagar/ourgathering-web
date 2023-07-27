import { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Help: FC = (): ReactElement => {
  return (
    <HelpPage>
      <h1>HELP</h1>
    </HelpPage>
  )
}

const HelpPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100vw;
  align-items: center;
  margin: 1em 5em;
  padding: 1em;
  background-color: rgba(255,255,255,0.7);
`

export { Help }
