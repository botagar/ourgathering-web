import { AU, FlagComponent, GB, US } from 'country-flag-icons/react/3x2'
import { FC, ReactElement } from 'react'
import styled from 'styled-components'

const LanguagePickerBar: FC = (): ReactElement => {
  console.log('Hi')

  return (
    <LanguagesContainer>
      {FlagIcon(GB, { title: 'English' })}
      {FlagIcon(AU, { title: 'English', selected: true })}
      {FlagIcon(US, { title: 'English', disabled: true })}
    </LanguagesContainer>
  )
}

const LanguagesContainer = styled.div`
  display: flex;
  position: fixed;
  background: black;
  right: 0;
  gap: 10px;
  padding: 5px;
  max-height: 2em;
  max-width: 480px;
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

export { LanguagePickerBar }
