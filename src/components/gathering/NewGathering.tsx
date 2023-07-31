import { FC, ReactElement } from 'react'
import styled from 'styled-components'

import AddNew from 'src/static/add_new.svg'

interface NewGatheringProps {
  prompt: string
}
const NewGathering: FC<NewGatheringProps> = ({ prompt }): ReactElement =>
  <NewGatheringContainer>
    <AddNewIcon />
    <p>{prompt}</p>
  </NewGatheringContainer>

const NewGatheringContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px dashed black;
  border-radius: 5px;
  background: #e4e4e4;
  padding: 5px 10px;
  width: 85%;
  align-items: center;
  cursor: pointer;

  transition-duration: 0.4s;

  &:hover {
    background: #c0c0c0;
  }

  p {
    margin-bottom: 0.2em;
  }
`
const AddNewIcon = styled(AddNew)`
  display: block;
  fill: black;
  max-width:3em;
  max-height:3em;
  width: auto;
  height: auto;
  margin: 0.5em 0 0.2em 0;
`

export {
  NewGathering
}
