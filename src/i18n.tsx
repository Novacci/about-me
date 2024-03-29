import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//! Import of translation files
import translationEnglish from './Translation/en/translation.json';
import translatePolish from './Translation/pl/translation.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
  pl: {
    translation: translatePolish,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
});
export default i18next;
