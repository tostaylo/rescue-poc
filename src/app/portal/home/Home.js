import React from 'react';
import { FormattedMessage } from 'react-intl';
import Footer from 'app/components/footer';

const Home = () => (
  <div className="home">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.home'} />
      </h1>
    </div>
    <Footer />
  </div>
);

export default Home;
