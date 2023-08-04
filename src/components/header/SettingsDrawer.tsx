import { AU, FlagComponent, US } from 'country-flag-icons/react/3x2'
import { FC, PropsWithChildren, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Cog from 'src/static/cog.png'
import { ThemePreferenceContext } from 'components/app-styles/Themes'

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

const SettingsDrawer: FC<SettingsDrawerProps> = ({ children, isOpen }): ReactElement => {
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

  useEffect(() => {
    const updatePageScroll = (): void => {
      if (bodyRef.current == null) return
      if (drawerIsOpen) {
        // bodyRef.current.style.overflow = 'hidden'
      } else {
        bodyRef.current.style.overflow = ''
      }
    }

    updatePageScroll()
  }, [drawerIsOpen])

  const tempUSA = FlagIcon(US, { title: 'English', disabled: true })

  return (
    <DrawerContainer aria-hidden={drawerIsOpen ? 'false' : 'true'}>
      <Drawer isOpen={drawerIsOpen}>
        <ContentArea>
          {children}
          {tempUSA}
          {tempUSA}
          {tempUSA}
          {tempUSA}
          {tempUSA}
        </ContentArea>
        <DisplayRow>
          {FlagIcon(AU, { title: 'English', selected: true })} EN | { currentColorTheme }
        </DisplayRow>
        <DrawerTab onClick={() => {
          console.log('Toggling drawer state to ', !drawerIsOpen)
          setDrawerIsOpen(!drawerIsOpen)
        }}
        >
          <Icon src={Cog} />
        </DrawerTab>
      </Drawer>
      <Backdrop />
    </DrawerContainer>
  )
}

const DrawerContainer = styled.div`
  --transition-speed: 0.3s;
`
const Drawer = styled.div<{ isOpen: boolean }>`
  background: #fff;
  min-width: 200px;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  transition: transform var(--transition-speed) ease;
  z-index: 1000;
  transform: translateY(-100%);

  ${({ isOpen }) => isOpen && `
    transform: translateY(0%);
  `}
`
const ContentArea = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`
const DisplayRow = styled.div`
  position: fixed;
  bottom: -30px;
  right: 0;
  min-width: 200px;
  background: black;
  color: white;
`
const DrawerTab = styled.button`
  background: grey;
  width: 100px;
  height: 20px;
  z-index: 1001;
  position: fixed;
  bottom: -50px;
  right: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid white;
`
const Backdrop = styled.div`
  
`
const Icon = styled.img`
  display: inline;
  max-width: 1em;
  max-height: 1em;
  width: auto;
  height: auto;
  filter: invert(100%);
`

interface FlagIconProps {
  title: string
  selected?: boolean
  disabled?: boolean
}
const FlagIcon = (flag: FlagComponent, { title, selected, disabled }: FlagIconProps): ReactElement => {
  const SizedFlag = styled(flag)<{ selected: boolean, disabled: boolean }>`
  width: 2em;
  opacity: ${props => props.disabled ? 0.4 : 1.0};
  ${({ selected }) => selected && `
    border: 1px solid gold;
  `}
`
  return <SizedFlag title={title} selected={selected ?? false} disabled={disabled ?? false} />
}

export {
  SettingsDrawer
}
export type {
  SettingsDrawerProps
}
