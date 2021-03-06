import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Logo } from 'app/components';
import {
  Drawer,
  Layout,
  Header,
  HeaderRow,
  Navigation,
  Content
} from 'react-mdl';
import 'react-mdl/extra/material';
import 'react-mdl/extra/css/material.css';
import './app.scss';

const AppLayout = props => {
  const closeDrawer = () => {
    const d = document.querySelector('.mdl-layout');
    d.MaterialLayout.toggleDrawer();
  };

  const portalDrawerNav = [
    { to: '/', id: <FormattedMessage id={'app.nav.home'} /> },
    { to: 'help', id: <FormattedMessage id={'app.nav.help'} /> },
    { to: 'contact', id: <FormattedMessage id={'app.nav.contact'} /> },
    { to: 'login', id: <FormattedMessage id={'app.nav.login'} /> },
    { to: 'signup', id: <FormattedMessage id={'app.nav.signup'} /> },
    { to: 'dashboard', id: <FormattedMessage id={'app.nav.dashboard'} /> },
    { to: '/dashboard/users', id: <FormattedMessage id={'app.nav.users'} /> },
    { to: 'respond', id: <FormattedMessage id={'app.nav.respond'} /> }
  ].map(item => (
    <Link to={item.to} key={item.to} onClick={closeDrawer}>
      {' '}
      {item.id}{' '}
    </Link>
  ));

  return (
    <div className="app">
      <Layout fixedHeader>
        <Header>
          <HeaderRow title={<Logo />} />
        </Header>
        <Drawer title={<Logo />}>
          <Navigation>{portalDrawerNav}</Navigation>
        </Drawer>
        <Content>{props.children}</Content>
      </Layout>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element
};

export default AppLayout;
