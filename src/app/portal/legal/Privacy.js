import React from 'react';
import { FormattedMessage } from 'react-intl';
import Footer from 'app/components/footer';

const Privacy = () => (
  <div className="privacy">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.privacy'} />
      </h1>
    </div>
    <Footer />
  </div>
);

export default Privacy;
