import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/LandingPage';
import Expenses from '../components/Expenses';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/expenses" exact component={Expenses} />
    </Switch>
  </Router>
);
