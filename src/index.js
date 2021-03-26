import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { translationMessages } from 'translations/i18n';

import LanguageProvider from 'containers/LanguageProvider';

import './index.scss';

const MOUNT_NODE = document.getElementById('root');

const render = (messages) => {
  ReactDOM.render(
    <React.StrictMode>
      <LanguageProvider messages={messages}>
        <App />
      </LanguageProvider>
    </React.StrictMode>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['translations/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/vi-VN.js'),
      ]),
    )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
