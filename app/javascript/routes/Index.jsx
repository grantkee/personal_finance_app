import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/views/LandingPage';
import Expenses from '../components/views/Expenses';

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/expenses" exact component={Expenses} />
    </Switch>
  </Router>
);
