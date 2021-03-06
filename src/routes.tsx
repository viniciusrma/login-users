import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;
