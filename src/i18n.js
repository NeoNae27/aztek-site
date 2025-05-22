import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationAz from "./locales/az/translation.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      az: { translation: translationAz },
    },
    fallbackLng: "en", // язык по умолчанию, если не найден

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
