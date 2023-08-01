import { RouteObject } from 'react-router-dom'

import { FC, ReactElement } from 'react'
import { Help, Home, ManageGatherings } from 'pages'
import { Gathering } from 'pages/gathering'

const TmpElement: FC = (): ReactElement => <h1>Hello</h1>

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
    element: <Help />
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