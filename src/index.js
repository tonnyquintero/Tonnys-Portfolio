import React from 'react';
import { DarkModeProvider } from '../src/context/ThemeContext'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from '../src/components/translations/es/globals.json';
import global_en from '../src/components/translations/en/global.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        es: {
            globals: global_es,
        },
        en: {
            globals: global_en,
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <DarkModeProvider>
            <App/>
        </DarkModeProvider>
    </I18nextProvider>, 
    document.querySelector("#root")
        );