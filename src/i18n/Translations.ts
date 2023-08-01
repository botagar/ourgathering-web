import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en_header from './translations/en/header.json'
import en_home from './translations/en/home.json'
import en_manage from './translations/en/manage.json'
import en_gathering from './translations/en/gathering.json'

const resources = {
  en: {
    translation: {},
    header: en_header,
    footer: {},
    home: en_home,
    manage: en_manage,
    gathering: en_gathering
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  }).catch(e => console.error(e))

export default i18n
