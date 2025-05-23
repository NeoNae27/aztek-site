import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationAz from "./locales/az/translation.json";
import servicesEn from "./locales/en/services.json";
import servicesAz from "./locales/az/services.json";
import projectsEn from "./locales/en/projects.json";
import projectsAz from "./locales/az/projects.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn,
        services: servicesEn,
        projects: projectsEn,
      },
      az: {
        translation: translationAz,
        services: servicesAz,
        projects: projectsAz,
      },
    },
    fallbackLng: "en", // Default language if the user language is not available

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
