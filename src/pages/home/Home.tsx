/* eslint-disable react/jsx-pascal-case */
import { FC, ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ColorThemes, ThemePreferenceContext } from 'components/app-styles/Themes'
import { GlassPanel } from 'components/generic/GlassPanel'

import DownChevronImage from 'src/static/down_chevron.png'

const Home: FC = (): ReactElement => {
  const { t } = useTranslation()
  const { setCurrentColorTheme } = useContext(ThemePreferenceContext)

  return (
    <HomePage>
      <HeroText>{t('home:hero_text')}</HeroText>
      <InstructionalStep>
        <Step>{t('home:step_1')}</Step>
        <P>{t('home:step_1_instruction')}</P>
        <Input type='email' placeholder={t('home:step_1_input_placeholder')} />
        <Register onClick={() => setCurrentColorTheme(ColorThemes.DARK)}><h4>{t('home:step_1_register')}</h4></Register>
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
  align-items: center;
  margin: 1em 22vw;
  padding: 1em;

  @media only screen and (max-width: 1080px){
    margin: 1em 12vw;
  }
  @media only screen and (max-width: 820px){
    padding: 1em 0;
    margin: 0;
    border-radius: 0;
  }
`
const InstructionalStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2em;
  padding: 0.5em;
  width: 80%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  box-shadow: 5px 5px rgba(0,0,0,0.6);

  @media only screen and (max-width: 820px){
    width: 100%;
    box-shadow: none;
    padding: 0;
    margin-bottom: 1em;
  }
`
const HeroText = styled.h1`
  font-size: 4em;
  text-align: center;
  font-family: 'Borel', cursive;
  color: rgb(238, 74, 74);
  text-shadow: 2px 2px rgba(0,0,0,1);
  margin-top: 0.4em;

  @media only screen and (max-width: 820px){
    line-height: 1.2em;
    font-size: 3em;
  }
`
const Step = styled.h2`
  color: white;
  margin-bottom: 0.3em;
`
const P = styled.p`
  color: white;
  padding-left: 5px;
  padding-right: 5px;
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
