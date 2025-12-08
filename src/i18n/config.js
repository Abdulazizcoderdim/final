import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

export const defaultNS = "common";
export const languages = ["en", "uz"];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: languages,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    returnEmptyString: false,
  });
}

export default i18n;
