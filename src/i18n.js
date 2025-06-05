import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationAz from "./locales/az/translation.json";
import servicesEn from "./locales/en/services.json";
import servicesAz from "./locales/az/services.json";
import projectsEn from "./locales/en/projects.json";
import projectsAz from "./locales/az/projects.json";
import companyEn from './locales/en/company.json';
import companyAz from './locales/az/company.json';
import navigationEn from './locales/en/navigation.json';
import navigationAz from './locales/az/navigation.json';
import mainPageEn from './locales/en/mainPage.json';
import mainPageAz from './locales/az/mainPage.json';
import aboutEn from './locales/en/about.json';
import aboutAz from './locales/az/about.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        mainPage: mainPageEn,
        about: aboutEn,
        translation: translationEn,
        navigation: navigationEn,
        services: servicesEn,
        projects: projectsEn,
        company: companyEn,
      },
      az: {
        mainPage: mainPageAz,
        about: aboutAz,
        translation: translationAz,
        navigation: navigationAz,
        services: servicesAz,
        projects: projectsAz,
        company: companyAz,
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
