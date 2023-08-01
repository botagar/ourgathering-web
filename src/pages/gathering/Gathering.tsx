import { FC, ReactElement, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { createFetcher } from './swcFetcher'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

import stubData from './GatheringStubData'
import { GlassPanel, GlassPanelProps } from 'components/generic/GlassPanel'

interface GatheringPageData {
  name: string
}

const Gathering: FC = (): ReactElement => {
  const { gatheringId, ownerId, authToken } = useParams()
  const { t } = useTranslation()

  const [gathering, setGathering] = useState<GatheringPageData | undefined>()

  const fetcher = createFetcher<GatheringPageData>(stubData, 100)
  const { data, error, isLoading } = useSWR(`/gathering/${gatheringId ?? ''}/${ownerId ?? ''}/${authToken ?? ''}`, fetcher)

  useEffect(() => {
    console.error(error)
  }, [error])

  const pageContent = (): ReactElement => {
    if (isLoading) return <h1>Loading...</h1>
    if (error !== undefined) return <h1>Oh no...</h1>
    if (data !== undefined) {
      return (
        <div>
          <h1>{data.name}</h1>
        </div>
      )
    }
    return <p>What state is this?</p>
  }

  return (
    <GatheringPage>
      {pageContent()}
    </GatheringPage>
  )
}

const GatheringPage = styled(GlassPanel)`
  flex-direction: column;
  flex: 0 0 90vh;
  align-items: center;
  margin: 1em 5em;
  padding: 1em;
`

export {
  Gathering
}

export type {
  GatheringPageData
}
