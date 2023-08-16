import { GB } from 'country-flag-icons/react/3x2'
import { FC, PropsWithChildren, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { ThemePreferenceContext } from 'components/app-styles/Themes'
import { FlagIcon } from 'components/generic/CountryFlag'

import Cog from 'src/static/cog.png'
import Sun from 'src/static/sun.png'
import { createPortal } from 'react-dom'

const createPortalRoot = (): HTMLDivElement => {
  const drawerRoot = document.createElement('div')
  drawerRoot.setAttribute('id', 'settings-drawer-root')

  return drawerRoot
}

interface SettingsDrawerProps extends PropsWithChildren {
  isOpen: boolean
  className: string
  onClose: Function
}

const SettingsDrawer: FC<SettingsDrawerProps> = ({ children, isOpen, onClose }): ReactElement => {
  const { i18n } = useTranslation()
  const { currentColorTheme } = useContext(ThemePreferenceContext)

  const bodyRef = useRef(document.querySelector('body'))
  const portalRootRef = useRef(document.getElementById('settings-drawer-root') ?? createPortalRoot())

  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(isOpen)

  useEffect(() => {
    bodyRef.current?.appendChild(portalRootRef.current)
    const portal = portalRootRef.current
    const bodyEl = bodyRef.current

    return () => {
      portal.remove()
      if (bodyEl != null) { bodyEl.style.overflow = '' }
    }
  }, [])

  return createPortal(
    <DrawerContainer aria-hidden={drawerIsOpen ? 'false' : 'true'}>
      <Drawer isOpen={drawerIsOpen}>
        <ContentArea>
          {children}
        </ContentArea>
        <ActiveSettings onClick={() => {
          console.log('Toggling drawer state to ', !drawerIsOpen)
          setDrawerIsOpen(!drawerIsOpen)
        }}
        >
          <ActiveSettingElement>
            {FlagIcon(GB, { title: 'English', selected: false })} <p>{i18n.language}</p>
          </ActiveSettingElement>
          <ActiveSettingElement>
            <Icon src={Sun} /> {currentColorTheme}
          </ActiveSettingElement>
          <ActiveSettingElement>
            <Icon src={Cog} />
          </ActiveSettingElement>
        </ActiveSettings>
      </Drawer>
      {drawerIsOpen
        ? <Backdrop onClick={() => {
          setDrawerIsOpen(false)
          onClose()
        }}
          />
        : <></>}
    </DrawerContainer>,
    portalRootRef.current
  )
}

const DrawerContainer = styled.div`
  --transition-speed: 0.3s;
`
const Drawer = styled.div<{ isOpen: boolean }>`
  background: #fff;
  min-width: 150px;
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  transition: transform var(--transition-speed) ease;
  z-index: 1;
  transform: translateY(-100%);

  ${({ isOpen }) => isOpen && `
    transform: translateY(0%);
  `}
`
const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const ActiveSettings = styled.div`
  position: fixed;
  bottom: -30px;
  right: 0;
  height: 30px;
  min-width: 150px;
  border-left: 1px solid rgba(255,255,255,0.5);
  border-bottom-left-radius: 5px;
  background: black;
  color: white;
  display: flex;
  padding: 0 5px;

  &:hover {
    box-shadow: 0 2px 5px rgba(255,255,255,1);
  }
`
const ActiveSettingElement = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  &:after {
    content: '';
    border-right: 1px solid rgba(255,255,255,0.7);
    height: 65%;
    margin-left: 5px;
    margin-right: 5px;
  }
  &:last-child {
    padding-right: 5px;
  }
  &:last-child:after {
    display: none;
  }
`
const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
`
const Icon = styled.img`
  display: inline;
  max-width: 1em;
  max-height: 1em;
  width: auto;
  height: auto;
  filter: invert(100%);
`

export {
  SettingsDrawer
}

export type {
  SettingsDrawerProps
}
