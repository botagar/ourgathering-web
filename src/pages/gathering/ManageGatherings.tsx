/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { NewGathering, GatheringOverviewData, GatheringOverview } from 'components'
import useSWR from 'swr'
import { stubData } from './StubData'

/* eslint-disable @typescript-eslint/no-unused-vars */
async function request<TResponse> (url: string, config: RequestInit = {}): Promise<TResponse> {
  return await fetch(url, config)
    .then(async (response) => await response.json())
    .then((data) => data as TResponse)
}

interface OverviewPageData {
  metadata: { activeGatherings: number, maxGatherings: number }
  gatherings: GatheringOverviewData[]
}

const ManageGatherings: FC = (): ReactElement => {
  const { ownerId, authToken } = useParams()
  const { t } = useTranslation()

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [metadata, setMetadata] = useState({ activeGatherings: 0, maxGatherings: 10 })
  const [gatherings, setGatherings] = useState<GatheringOverviewData[]>([])

  const fetcher = async (path: string): Promise<OverviewPageData> => {
    // const res = request<GatheringOverview>(path)
    const stub = stubData()
    // await new Promise(f => setTimeout(f, 1000))
    console.log('Waited 1s')
    const res = Promise.resolve(stub)
    return await res
  }
  const { data, error, isLoading } = useSWR(`/overview/${ownerId ?? ''}/${authToken ?? ''}`, fetcher)

  useEffect(() => {
    console.error(error)
  }, [error])

  useEffect(() => {
    ((data?.metadata) != null) && setMetadata(data.metadata);
    ((data?.gatherings) != null) && setGatherings(data.gatherings)
  }, [data])

  return (
    <ManageGatheringsPage>
      <h1>{t('manage:title')}</h1>
      <Metadata>
        <p>{metadata.activeGatherings}/{metadata.maxGatherings} {t('manage:active_gatherings')}</p>
      </Metadata>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        !isLoading && gatherings.map(go => {
          return <GatheringOverview key={go.name} data={go} />
        })
      }
      {
        metadata.activeGatherings < metadata.maxGatherings
          ? <NewGathering prompt={t('manage:create_new_prompt')} />
          : null
      }
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
const Metadata = styled.div`
    margin-bottom: 0.6em;
`

export { ManageGatherings }
export type { OverviewPageData }
