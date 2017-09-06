import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider, intlReducer } from 'react-intl-redux';
import { localeData } from 'app/test/mock';
import AppIntl from './AppIntl';

const AppStore = () => {
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

  return (
    <Provider store={store}>
      <AppIntl />
    </Provider>
  );
};

export default AppStore;
