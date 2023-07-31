import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import EarthPng from 'src/static/earth.png'
import LaptopPng from 'src/static/laptop.png'

interface GatheringOverviewData {
  name: string
  date: Date
  description: string
  locations: LocationOverviewData[]
}

interface LocationOverviewData {
  name: string
  type: 'TERRESTRIAL' | 'VIRTUAL'
  address: string
}

interface GatheringOverviewProps {
  data: GatheringOverviewData
}

const GatheringOverview: FC<GatheringOverviewProps> = ({ data }): ReactElement =>
  <GatheringOverviewListEntry>
    <GatheringTitle>{data.name}</GatheringTitle>
    <p>{data.date.toLocaleDateString()}</p>
    <GatheringDescription>{data.description}</GatheringDescription>
    <LocationsContainer>
      {
        (data.locations.length === 0) && <NoLocations />
      }
      {
        (data.locations.length <= 4) && data.locations.map(loc => {
          const { name, type, address } = loc
          return <Location key={`${type}/${name}`} name={name} type={type} address={address} />
        })
      }
      {
        (data.locations.length > 4) &&
          <>
            {
              data.locations.slice(0, 3).map(loc => {
                const { name, type, address } = loc
                return <Location key={`${type}/${name}`} name={name} type={type} address={address} />
              })
            }
            <MoreLocations remainder={data.locations.length - 3} />
          </>
      }
    </LocationsContainer>
  </GatheringOverviewListEntry>

const Location: FC<LocationOverviewData> = ({ name, type, address }): ReactElement =>
  <LocationContainer>
    <LocationNameRow>
      <LocationIcon src={type === 'TERRESTRIAL' ? EarthPng : LaptopPng} />
      <p>{name}</p>
    </LocationNameRow>
    <LocationAddress>{address}</LocationAddress>
  </LocationContainer>

const MoreLocations: FC<{ remainder: number }> = ({ remainder }): ReactElement =>
  <MoreLocationsContainer>
    <p>+ {remainder} More Locations</p>
  </MoreLocationsContainer>

const NoLocations: FC = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <NoLocationsContainer>
      <p>{t('manage:no_location')}</p>
    </NoLocationsContainer>
  )
}

const GatheringOverviewListEntry = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 5px;
  background: #e4e4e4;
  padding: 10px;
  width: 85%;
  margin-bottom: 1em;
`
const GatheringTitle = styled.h2`
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 0.1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const GatheringDescription = styled.p`
  margin-bottom: 0.1em;
  max-height: 85px;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: pre-wrap;
`
const LocationsContainer = styled.div`
  display: flex;
  gap: 5px;
  min-height: 80px;
  max-height: 100px;
  border-top: 1px solid grey;
  padding-top: 10px;
`
const LocationContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 24%;
  height: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
`
const LocationNameRow = styled.div`
  border-bottom: 1px solid grey;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  p {
    display: inline;
  }
`
const LocationIcon = styled.img`
  display: inline;
  max-width: 1em;
  max-height: 1em;
  width: auto;
  height: auto;
  margin-right: 0.2em;
`
const LocationAddress = styled.p`
  font-size: 0.8em;
`
const MoreLocationsContainer = styled.div`
  display: flex;
  max-width: 24%;
  align-items: center;
`
const NoLocationsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: grey;
`

export {
  GatheringOverview,
  GatheringOverviewData,
  LocationOverviewData
}
