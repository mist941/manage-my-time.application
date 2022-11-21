import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import translationEN from './translations/en.json';
import translationUA from './translations/ua.json';


const resources = {
  en: {translation: translationEN},
  ua: {translation: translationUA},
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;