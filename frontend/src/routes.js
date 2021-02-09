import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './page/home';
import Details from './page/details';
import Edit from './page/edit';
import Create from './page/create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create" component={Create} />
      <Route path="/details/:id" component={Details} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  );
}
