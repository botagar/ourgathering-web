/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import DownChevronImage from 'src/static/down_chevron.png'
import { GlassPanel } from 'components/generic/GlassPanel'

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

const HomePage = styled(GlassPanel)`
  flex-direction: column;
  flex: 0 0 90vh;
  align-items: center;
  margin: 1em 22vw;
  padding: 1em;

  @media only screen and (max-width: 1080px){
    margin: 1em 12vw;
  }
  @media only screen and (max-width: 820px){
    margin: 1em 8vw;
  }
`
const InstructionalStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  padding: 0.5em;
  width: 80%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  box-shadow: 5px 5px rgba(0,0,0,0.6);

  @media only screen and (max-width: 820px){
    width: 90%;
  }
`
const HeroText = styled.h1`
  font-size: 4em;
  text-align: center;
  font-family: 'Borel', cursive;
  color: rgb(238, 74, 74);
  margin-top: 0.4em;

  @media only screen and (max-width: 820px){
    font-size: 3em;
  }
`
const Step = styled.h2`
  color: white;
  margin-bottom: 0.3em;
`
const P = styled.p`
  color: white;
  margin-bottom: 1em;
`
const Input = styled.input`
  width: 75%;
  min-width: 200px;
  height: 40px;
  margin-bottom: 1em;
  font-size: 1em;
  border-radius: 5px;

  &::placeholder {
    font-style: italic;
  }

  @media only screen and (max-width: 820px){
    width: 90%;
  }
`
const Register = styled.button`
  width: 30%;
  min-width: 150px;
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
