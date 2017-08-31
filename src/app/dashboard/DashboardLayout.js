import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Drawer, Layout, Navigation, Content } from 'react-mdl';

const DashboardLayout = props => {
  const portalDrawerNav = [
    { to: '/dashboard', id: <FormattedMessage id={'app.nav.dashboard'} /> },
    { to: '/dashboard/users', id: <FormattedMessage id={'app.nav.users'} /> }
  ].map(item => (
    <Link to={item.to} key={item.to}>
      {' '}
      {item.id}{' '}
    </Link>
  ));

  return (
    <div className="app">
      <Layout fixedDrawer>
        <Drawer>
          <Navigation>{portalDrawerNav}</Navigation>
        </Drawer>
        <Content>{props.children}</Content>
      </Layout>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element
};

export default DashboardLayout;
