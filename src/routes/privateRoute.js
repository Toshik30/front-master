import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthorized } from 'store/selectors';
import { LOGIN_PATH } from 'routes/routePaths';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route
      {...rest} render={(props) => (isAuthorized)
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: LOGIN_PATH }} />)
      }
    />
  );
};

export default PrivateRoute;
