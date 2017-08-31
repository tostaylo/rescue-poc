import React from 'react';
import { FormattedMessage } from 'react-intl';

const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-content">
      <h1>
        <FormattedMessage id={'app.nav.dashboard'} />
      </h1>
    </div>
  </div>
);

export default Dashboard;
