import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import AddCar from './pages/AddCar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/adicionar' component={AddCar} />
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
