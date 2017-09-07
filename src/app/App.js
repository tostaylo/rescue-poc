import React from 'react';
import { Provider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppIntl from './AppIntl';
import store from './AppStore';

injectTapEventPlugin();

const AppStore = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <AppIntl />
    </Provider>
  </MuiThemeProvider>
);

export default AppStore;
