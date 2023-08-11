import { FlagComponent } from "country-flag-icons/react/3x2"
import { ReactElement } from "react"
import styled from "styled-components"

interface FlagIconProps {
  title: string
  selected?: boolean
  disabled?: boolean
}
const FlagIcon = (flag: FlagComponent, { title, selected, disabled }: FlagIconProps): ReactElement => {
  const SizedFlag = styled(flag) <{ selected: boolean, disabled: boolean }>`
    width: 1.5em;
    opacity: ${props => props.disabled ? 0.4 : 1.0};
    ${({ selected }) => selected && `
      border: 1px solid gold;
    `}
  `
  return <SizedFlag title={title} selected={selected ?? false} disabled={disabled ?? false} />
}

export {
  FlagIcon
}
