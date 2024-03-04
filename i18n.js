// i18n.ts
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import enTranslation from "./en.json";
import ruTranslation from "./ru.json";
import uzTranslation from "./uz.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
    uz: {
      translation: uzTranslation,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
