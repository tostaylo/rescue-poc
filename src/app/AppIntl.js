import React from 'react';
import { addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl-redux';
import en from 'react-intl/locale-data/en';
import { localeData } from 'app/test/mock';
import AppRouter from './AppRouter';

const AppIntl = () => {
  addLocaleData([...en]);
  const locale = navigator.language || 'en';
  const messages = localeData.intl;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <AppRouter />
    </IntlProvider>
  );
};

export default AppIntl;
