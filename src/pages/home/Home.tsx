/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement } from 'react'
import styled from 'styled-components'

const Home: FC = (): ReactElement => {
  return (
    <HomePage>
      <InstructionalStep>
        <HeroText>Get Started!</HeroText>
      </InstructionalStep>
      <InstructionalStep>
        <h2>Step 1</h2>
        <p>Register with your email</p>
        <input type='email' />
        <button><p>Register</p></button>
      </InstructionalStep>
      <InstructionalStep>
        <h2>Step 2</h2>
        <p>Click the authentication link in your email inbox</p>
      </InstructionalStep>
      <InstructionalStep>
        <h2>Step 3</h2>
        <p>Create a Gathering!</p>
      </InstructionalStep>
    </HomePage>
  )
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100vw;
  align-items: center;
  margin: 1em 5em;
  padding: 1em;
  background-color: rgba(255,255,255,0.7);
`
const InstructionalStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeroText = styled.h1`
  font-size: 6em;
  text-align: center;
`

export { Home }
