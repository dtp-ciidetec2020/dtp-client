import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './View/Login';
import Register from './View/Register';

export default () => (
  <Switch>
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/register" component={Register} />
  </Switch>
);
