import React from 'react';
import { FormattedMessage } from 'react-intl';

const Logo = () => (
  <span>
    <img
      src="/asset/img/logo.svg"
      alt={<FormattedMessage id={'app.title'} />}
      height="45"
    />
    <FormattedMessage id={'app.title'} />
  </span>
);

export default Logo;
