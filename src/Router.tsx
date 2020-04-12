import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './View/Login';

export default () => (
  <Switch>
    <Route path="/" component={Login} />
  </Switch>
);
