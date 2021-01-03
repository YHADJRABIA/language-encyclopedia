import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translationEN.json";
import translationFR from "../locales/fr/translationFR.json";
import translationRU from "../locales/ru/translationRU.json";
import translationSV from "../locales/sv/translationSV.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ru: {
    translation: translationRU,
  },
  sv: {
    translation: translationSV,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keyseparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
