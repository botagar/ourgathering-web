import { FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface GlassPanelProps {
  className?: string
  children: ReactNode
}

const GlassPanel: FC<GlassPanelProps> = ({ className, children }): ReactElement => {
  return (
    <GlassPane className={className}>
      {children}
    </GlassPane>
  )
}

const GlassPane = styled.div`
    position: relative;
    padding: 10px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.5);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
    min-width: 50px;
    min-height: 50px;
    display: flex;
`

export {
  GlassPanel
}

export type {
  GlassPanelProps
}
