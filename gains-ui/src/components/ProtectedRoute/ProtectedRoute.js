import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import constants from '../../utilities/constants';

/**
 * Takes in a component and conditionally renders
 * it depending on whether the user is logged in
 * and if he/she is a manager, admin, or apprentice
 * @param {*} component
 */
function ProtectedRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return <Redirect to={{ pathname: constants.SIGN_IN_PATH }} />;
        }
        return <Component {...rest} {...props} />;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
