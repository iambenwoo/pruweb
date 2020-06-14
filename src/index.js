import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import message_en from './i18n/en';
import message_zh from './i18n/zh';

const locale = navigator.locale;
const messages = {
  'en': message_en,
  'zh': message_zh
}

ReactDOM.render(
  <Suspense fallback={null}>
    <React.StrictMode>
      <IntlProvider locale="zh" defaultLocale="en" messages={messages["zh"]}>
        <App />
      </IntlProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
