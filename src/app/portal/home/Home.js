import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Button, Footer } from 'app/components';

const Home = () => (
  <div className="home">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.home'} />
      </h1>
      <div>
        <Link to={'help'}>
          <Button label={<FormattedMessage id={'label.getHelp'} />} />
        </Link>
      </div>
      <div>
        <Link to={'respond'}>
          <Button label={<FormattedMessage id={'label.provideHelp'} />} />
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
