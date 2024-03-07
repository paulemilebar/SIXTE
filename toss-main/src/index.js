import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { HashRouter } from "react-router-dom"
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";


import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

const lang = localStorage.getItem('lang')

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: `${lang}`,                              // language to use
    resources: {
        EN: {
            common: common_en               // 'common' is our custom namespace
        },
        FR: {
            common: common_fr
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
       <HashRouter>
      <App />
    </HashRouter>
    </I18nextProvider>
   
  </React.StrictMode>
)