import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/app';
import i18n from './services/i18n';
import { I18nextProvider } from 'react-i18next';

import './assets/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App/>
    </I18nextProvider>
  </StrictMode>
);
