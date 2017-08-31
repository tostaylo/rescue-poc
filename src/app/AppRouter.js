import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'react-mdl/extra/material';
import 'react-mdl/extra/css/material.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Contact, Home, Login, Privacy, Terms } from 'app/portal';
import { Dashboard, DashboardLayout, Users } from 'app/dashboard';
import AppLayout from './AppLayout';
import './app.scss';

injectTapEventPlugin();

const AppRouter = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Home} />
        <Route path="contact" component={Contact} />
        <Route path="login" component={Login} />
        <Route path="privacy" component={Privacy} />
        <Route path="terms" component={Terms} />
        <Route path="dashboard" component={DashboardLayout}>
          <IndexRoute component={Dashboard} />
          <Route path="users" component={Users} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
);

// export App
export default AppRouter;
