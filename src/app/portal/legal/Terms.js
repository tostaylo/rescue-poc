import React from 'react';
import { FormattedMessage } from 'react-intl';
import Footer from 'app/components/footer';

const Terms = () => (
  <div className="terms">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.terms'} />
      </h1>
    </div>
    <Footer />
  </div>
);

export default Terms;
