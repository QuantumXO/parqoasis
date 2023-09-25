import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

function App(): ReactElement {
  const { t, i18n } = useTranslation();
  
  const onChangeLanguage = async (lng?: string): Promise<void> => {
    await i18n.changeLanguage(lng);
  }
  
  return (
    <div className="App">
      {t('welcome')}
    </div>
  );
}

export default App;
