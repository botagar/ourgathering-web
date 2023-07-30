/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import AddNew from 'src/static/add_new.svg'

const ManageGatherings: FC = (): ReactElement => {
  const { ownerId, authToken } = useParams()
  const { t } = useTranslation()

  return (
    <ManageGatheringsPage>
      <h1>{t('manage:title')}</h1>
      <p>{ownerId} - {authToken}</p>
      <NewGathering>
        <AddNewIcon />
        <p>Create new gathering</p>
      </NewGathering>
    </ManageGatheringsPage>
  )
}

const ManageGatheringsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 90vh;
  align-items: center;
  margin: 1em 5em;
  padding: 1em;
  background-color: rgba(255,255,255,0.8);
`
const NewGathering = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px dashed #53ced5;
  border-radius: 5px;
  background: #53ced526;
  padding: 5px 10px;
  width: 85%;
  align-items: center;
`
const AddNewIcon = styled(AddNew)`
  display: block;
  fill: black;
  max-width:3em;
  max-height:3em;
  width: auto;
  height: auto;
  margin: 1em 0;
`

export { ManageGatherings }
