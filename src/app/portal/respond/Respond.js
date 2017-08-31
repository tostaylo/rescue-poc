import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Footer } from 'app/components';

const Respond = () => (
  <div className="respond">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.respond'} />
      </h1>
    </div>
    <Footer />
  </div>
);

export default Respond;
