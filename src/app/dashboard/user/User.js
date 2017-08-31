import React from 'react';
import { FormattedMessage } from 'react-intl';

const User = () => (
  <div className="user">
    <div className="dashboard-content">
      <h1>
        <FormattedMessage id={'app.nav.user'} />
      </h1>
    </div>
  </div>
);

export default User;
