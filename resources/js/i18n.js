import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Minimal resources so changeLanguage works.
// Keys must match your CustomizerSlice values: 'en', 'ch', 'fr', 'ar'
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: {} },
      ch: { translation: {} },
      fr: { translation: {} },
      ar: { translation: {} },
    },
    interpolation: { escapeValue: false },
  })

export default i18n
