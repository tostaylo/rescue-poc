import React from 'react';
import { addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl-redux';
import en from 'react-intl/locale-data/en';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { localeData } from 'app/test/mock';
import AppRouter from './AppRouter';

const AppIntl = () => {
  injectTapEventPlugin();
  addLocaleData([...en]);
  const locale = navigator.language || 'en';
  const messages = localeData.intl;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <MuiThemeProvider>
        <AppRouter />
      </MuiThemeProvider>
    </IntlProvider>
  );
};

export default AppIntl;
