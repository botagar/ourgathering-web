/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement } from 'react'
import styled from 'styled-components'

import DownChevronImage from 'src/static/down_chevron.png'

const Home: FC = (): ReactElement => {
  return (
    <HomePage>
      <HeroText>Get Started!</HeroText>
      <InstructionalStep>
        <Step>Step 1</Step>
        <P>Register with your email or phone number.</P>
        <Input type='email' />
        <Register><h4>Register</h4></Register>
      </InstructionalStep>
      <DownChevron src={DownChevronImage} />
      <InstructionalStep>
        <Step>Step 2</Step>
        <P>Click the authentication link sent to you.</P>
      </InstructionalStep>
      <DownChevron src={DownChevronImage} />
      <InstructionalStep>
        <Step>Step 3</Step>
        <P>Create a Gathering!</P>
      </InstructionalStep>
    </HomePage>
  )
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 90vh;
  align-items: center;
  margin: 1em 5em;
  padding: 1em;
  background-color: rgba(255,255,255,0.8);
`
const InstructionalStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  padding: 0.5em;
  width: 60%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px rgba(0,0,0,0.6);
`
const HeroText = styled.h1`
  font-size: 7em;
  text-align: center;
`
const Step = styled.h2`
  margin-bottom: 0.3em;
`
const P = styled.p`
  font-weight: bold;
  margin-bottom: 1em;
`
const Input = styled.input`
  width: 50%;
  min-width: 400px;
  margin-bottom: 1em;
`
const Register = styled.button`
  width: 30%;
  min-width: 80px;
  height: 40px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #00FF5F;

  h4 {
    font-weight: bold;
    color: #be4190;
  }
`
const DownChevron = styled.img`
  display: block;
  max-width:8em;
  max-height:3em;
  width: auto;
  height: auto;
  margin-bottom: 1em;
`

export { Home }
