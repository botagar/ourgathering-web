import { OverviewPageData } from './ManageGatherings'

const stubData = (): OverviewPageData => {
  return {
    metadata: { activeGatherings: 4, maxGatherings: 10 },
    gatherings: [
      {
        name: 'My first party',
        date: new Date('2023-07-30T10:29:24Z'),
        description: 'A description for this gathering.',
        locations: [
          {
            name: 'Location 1',
            type: 'TERRESTRIAL',
            address: '1 MyHouse St, SomeSuburb, Country, 12345'
          },
          {
            name: 'Location 2',
            type: 'VIRTUAL',
            address: 'https://127.0.0.1/livestream'
          },
          {
            name: 'Kitchen StreamCam',
            type: 'VIRTUAL',
            address: 'https://127.0.0.1/livestream2'
          },
          {
            name: 'Backyard StreamCam',
            type: 'VIRTUAL',
            address: 'https://127.0.0.1/livestream3'
          },
          {
            name: 'Frontdoor StreamCam',
            type: 'VIRTUAL',
            address: 'https://127.0.0.1/livestream4?auth=asdfasdafsdfasdf'
          }
        ]
      },
      {
        name: 'My first BBQ',
        date: new Date('2023-07-30T10:29:24Z'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        locations: [
          {
            name: 'Location 1',
            type: 'TERRESTRIAL',
            address: '127 A Park Near My House, SomeSuburb, Country, 12346'
          },
          {
            name: 'Outdoor Park StreamCam',
            type: 'VIRTUAL',
            address: 'https://127.0.0.1/livestream3'
          }
        ]
      },
      {
        name: 'My second BBQBQBQBQBQBBBBQQQBQBQBBQBQBQQBBQBBQBQBQBQBBQBQBBQBQBQBBBQBQBQBQBQBQBQB',
        date: new Date('2023-07-30T10:29:24Z'),
        description: 'A description for this gathering.',
        locations: [
          {
            name: 'Location 2',
            type: 'TERRESTRIAL',
            address: '127 A Park Near Another House, SomeOtherSuburb, Country, 12346'
          }
        ]
      },
      {
        name: 'Streaming My Game Release!',
        date: new Date('2023-08-30T10:29:24Z'),
        description: 'Tune in to see my brand new game release!',
        locations: [
          {
            name: 'My Twotch Stream',
            type: 'VIRTUAL',
            address: 'https://twotch.tv/me'
          }
        ]
      },
      {
        name: 'WIP Meeting',
        date: new Date('2023-08-30T10:29:24Z'),
        description: 'Not Sure Yet',
        locations: []
      }
    ]
  }
}

export {
  stubData
}
