import React from 'react';
import * as Type from '../../types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getAuthorizationStatusSelector} from '../../store/selectors';
import {
  AppRoute,
  AuthorizationStatus
} from '../../constants';

const PrivateRoute = (props) => {
  const {path, exact, render, authorizationStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={ AppRoute.LOGIN } />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: Type.STRING.isRequired,
  exact: Type.BOOLEAN.isRequired,
  path: Type.STRING.isRequired,
  render: Type.FUNCTION.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
