import React from "react";
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Layout from "./UI/Layout";
import Routing from "./routes/routes";
import {I18nextProvider} from "react-i18next";
import {initReactI18next} from "react-i18next";

import translationEN from "../locales/ns1.json";
import translationRu from "../locales/ns2.json";
import translationUz from "../locales/ns3.json";
import i18n from "i18next";
import {FormProvider} from "./UI/FormProvider";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRu,
    },
    uz: {
      translation: translationUz,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <FormProvider>
          <Layout>
            <Routing onSubmit={() => {}} />
          </Layout>
        </FormProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
