// Libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const accessToken = useSelector((state) => state.token.accessToken);

  return (
    <Route
      {...rest}
      render={(props) => (accessToken
        ? (
          <Component {...props} />
        )
        : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ))}
    />
  );
}

export default PrivateRoute;
