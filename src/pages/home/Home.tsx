/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import DownChevronImage from 'src/static/down_chevron.png'

const Home: FC = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <HomePage>
      <HeroText>{t('home:hero_text')}</HeroText>
      <InstructionalStep>
        <Step>{t('home:step_1')}</Step>
        <P>{t('home:step_1_instruction')}</P>
        <Input type='email' placeholder={t('home:step_1_input_placeholder')} />
        <Register><h4>{t('home:step_1_register')}</h4></Register>
      </InstructionalStep>
      <DownChevron src={DownChevronImage} />
      <InstructionalStep>
        <Step>{t('home:step_2')}</Step>
        <P>{t('home:step_2_instruction')}</P>
      </InstructionalStep>
      <DownChevron src={DownChevronImage} />
      <InstructionalStep>
        <Step>{t('home:step_3')}</Step>
        <P>{t('home:step_3_instruction')}</P>
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
  height: 30px;
  margin-bottom: 1em;
  font-size: 1em;
  border-radius: 5px;

  &::placeholder {
    font-style: italic;
  }
`
const Register = styled.button`
  width: 30%;
  min-width: 80px;
  height: 40px;
  text-align: center;
  border: 2px solid rgb(15, 115, 12);
  border-radius: 5px;
  /* background-color: rgb(15, 115, 12); */
  margin-bottom: 0.7em;
  cursor: pointer;

  transition-duration: 0.4s;

  &:hover {
    background-color: rgb(15, 115, 12);

    h4 {
      color: white;
    }
  }

  h4 {
    font-weight: bold;
    color: black;
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
