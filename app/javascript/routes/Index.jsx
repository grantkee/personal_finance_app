import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/LandingPage';
import Categories from '../containers/Categories';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
    </Switch>
  </Router>
);
