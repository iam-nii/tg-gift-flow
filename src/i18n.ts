import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

i18n
  .use(LanguageDetector) // Detect users language
  .use(initReactI18next)
  .init({
    fallbackLng: "ru", // Default Language
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { tranlation: enTranslation },
      ru: { tranlation: ruTranslation },
    },
  });
export default i18n;
