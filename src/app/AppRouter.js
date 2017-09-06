import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {
  Contact,
  Help,
  Home,
  Login,
  Respond,
  Privacy,
  Terms
} from 'app/portal';
import { Dashboard, DashboardLayout, Users } from 'app/dashboard';
import AppLayout from './AppLayout';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="login" component={Login} />
      <Route path="help" component={Help} />
      <Route path="respond" component={Respond} />
      <Route path="privacy" component={Privacy} />
      <Route path="terms" component={Terms} />
      <Route path="dashboard" component={DashboardLayout}>
        <IndexRoute component={Dashboard} />
        <Route path="users" component={Users} />
      </Route>
    </Route>
  </Router>
);

// export App
export default AppRouter;
