import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import servicesEn from "./locales/en/content/services.json";
import servicesAz from "./locales/az/content/services.json";
import projectsEn from "./locales/en/content/projects.json";
import projectsAz from "./locales/az/content/projects.json";

import navigationEn from './locales/en/components/navigation.json';
import navigationAz from './locales/az/components/navigation.json';

import mainPageEn from './locales/en/pages/mainPage.json';
import mainPageAz from './locales/az/pages/mainPage.json';
import companyPageEn from './locales/en/pages/companyPage.json';
import companyPageAz from './locales/az/pages/companyPage.json';

import certificatesPageEn from './locales/en/pages/certificatesPage.json';
import certificatesPageAz from './locales/az/pages/certificatesPage.json';

import aboutLayoutEn from './locales/en/layouts/aboutLayout.json';
import aboutLayoutAz from './locales/az/layouts/aboutLayout.json';
import servicesLayoutEn from './locales/en/layouts/servicesLayout.json';
import servicesLayoutAz from './locales/az/layouts/servicesLayout.json';
import projectsLayoutEn from './locales/en/layouts/projectsLayout.json';
import projectsLayoutAz from './locales/az/layouts/projectsLayout.json';
import contactsLayoutEn from './locales/en/layouts/contactsLayout.json';
import contactsLayoutAz from './locales/az/layouts/contactsLayout.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false // This ensures components re-render on language change
    },
    resources: {
      en: {
        navigation: navigationEn,
        
        mainPage: mainPageEn,
        certificatesPage: certificatesPageEn,
        
        aboutLayout: aboutLayoutEn,
        servicesLayout: servicesLayoutEn,
        projectsLayout: projectsLayoutEn,
        contactsLayout: contactsLayoutEn,

        services: servicesEn,
        projects: projectsEn,
        company: companyPageEn,
      },
      az: {
        navigation: navigationAz,
        mainPage: mainPageAz,
        company: companyPageAz,
        certificatesPage: certificatesPageAz,
        
        aboutLayout: aboutLayoutAz,
        servicesLayout: servicesLayoutAz,
        projectsLayout: projectsLayoutAz,
        contactsLayout: contactsLayoutAz,
        
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
