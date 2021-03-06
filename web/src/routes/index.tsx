import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Landing} exact />
    <Route path="/app" component={OrphanagesMap} />
  </Switch>
);

export default Routes;
