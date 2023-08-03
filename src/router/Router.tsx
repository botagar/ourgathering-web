import { RouteObject } from 'react-router-dom'

import { FC, ReactElement } from 'react'
import { Home, ManageGatherings } from 'pages'
import { Gathering } from 'pages/gathering'
import loadable from '@loadable/component'

const TmpElement: FC = (): ReactElement => <h1>Hello</h1>

// const AsyncHelp = loadable(async () => await import('pages'))
const AsyncHelp = loadable(
  async () =>
    await import(
      /* webpackChunkName: "async-pages", webpackPrefetch: true */ 'pages'
    ),
  {
    resolveComponent: (components) => components.Help,
    fallback: <h1>Waiting...</h1>
  }
)

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/help',
    element: <AsyncHelp />
  },
  {
    path: '/manage/:ownerId/:authToken',
    element: <ManageGatherings />
  },
  {
    path: '/gathering/new/:ownerId/:authToken',
    element: <TmpElement />
  },
  {
    path: '/gathering/:gatheringId/:ownerId/:authToken',
    element: <Gathering />
  },
  {
    path: '/about',
    element: <TmpElement />
  },
  {
    path: '/404',
    element: <TmpElement />
  },
  {
    path: 'sw.js',
    loader: async () => {
      return await fetch('sw.js')
    }
  }
]

export { routes }
