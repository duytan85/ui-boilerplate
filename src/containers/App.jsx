import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { getRoutePath, getRouteComponent } from '../routes';

const AppContainer = () => (
  <Switch>
    <Route exact path={getRoutePath('root')} component={getRouteComponent('root')} />
  </Switch>
);

export default AppContainer;
