import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import routesConfig from './routesConfig';


const Routes = () => (
  <Suspense fallback="...Loading">
    <Switch>
      {routesConfig.map((route, index) => (route.private)
        ? (<PrivateRoute key={index} path={route.path} exact={route.exact} component={route.component} />)
        : (<Route key={index} path={route.path} exact={route.exact} component={route.component} />),
      )}
    </Switch>
  </Suspense>
);

export default Routes;
