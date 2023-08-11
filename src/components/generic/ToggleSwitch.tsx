import { ReactElement } from "react"
import styled from "styled-components"

const ToggleSwitch = (): ReactElement => {

    return (
        <ToggleGroup onChange={(e) => console.log(e.target)}>
            <ToggleLabel>
                <Toggle className="theme-toggle" type={'checkbox'} name={'theme'} />
                <ToggleGraphic className="toggle-graphic" />
            </ToggleLabel>
        </ToggleGroup>
        )
}

const ToggleGroup = styled.div`
  --toggle-width: 50px;
  --toggle-height: 1.5em;
  position: relative;
  height: 30px;
  width: var(--toggle-width);
`
const ToggleLabel = styled.label`
  position: absolute;
  width: 100%;
  height: var(--toggle-height);
  background-color: black;
  border-radius: calc(var(--toggle-height) * 0.5);
  cursor: pointer;
`
const ToggleGraphic = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--toggle-height) * 0.5);
  transition: 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: calc(var(--toggle-height) * 0.1);
    left: calc(var(--toggle-height) * 0.1);
    width: calc(var(--toggle-height) * 0.8);
    height: calc(var(--toggle-height) * 0.8);
    border-radius: 50%;
    box-shadow: inset 6px -4px 0px 0px white;
    background-color: black;
    transition: 0.3s;
  }
`
const Toggle = styled.input`
  position: absolute;
  display: none;

  &:checked ~ ${`${ToggleGraphic}`} {
    background-color: white;
  }
  &:checked ~ ${`${ToggleGraphic}`}::before {
    transform: translateX(calc(var(--toggle-width) * 0.5));
    background-color: black;
    box-shadow: none;
  }
`

export {
    ToggleSwitch
}
