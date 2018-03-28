import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getRoutePath, getRouteComponent } from '../routes';

const AppContainer = () => (
  <Switch>
    <Route exact path={getRoutePath('home')} component={getRouteComponent('home')} />
  </Switch>
);

export default AppContainer;
