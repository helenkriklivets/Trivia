import * as React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

const renderRoutes = (routes, parentPath = '', extraProps = {}) => {
  return routes ? (
    <Switch>
      { routes.map((route, i) => {
          const absolutePath = (route.path) ? (parentPath !== '/' ? (parentPath + route.path) : route.path) : route.path;
          return (
            <Route
              key={ route.key || i }
              path={ absolutePath }
              exact={ route.exact }
              strict={ route.strict }
              render={ (props) => <route.component { ...props } { ...extraProps } route={ route }/> }
            />
            );
        },
      ) }
    </Switch>
  ) : null;
};

export default renderRoutes;
