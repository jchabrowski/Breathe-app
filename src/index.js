import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18n';
import * as serviceWorker from './serviceWorker';
import i18n from './i18n/i18n';
import { I18nextProvider } from "react-i18next";

ReactDOM.render(<I18nextProvider i18n={i18n}><App /></I18nextProvider>,document.getElementById('root'));

serviceWorker.unregister();
