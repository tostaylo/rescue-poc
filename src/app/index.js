import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { addLocaleData } from 'react-intl';
import { Provider, intlReducer, IntlProvider } from 'react-intl-redux';
import en from 'react-intl/locale-data/en';
import { localeData } from 'app/test/mock';

import AppRouter from './AppRouter';

const reducer = combineReducers({
  form: formReducer,
  intl: intlReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  localeData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

addLocaleData([...en]);

const locale = navigator.language || 'en';
const messages = localeData.intl;

render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages}>
      <AppRouter />
    </IntlProvider>
  </Provider>,
  document.getElementById('view')
);
