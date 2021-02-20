import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login';
import HomePage from '../pages/homepage/HomePage';
import constants from '../../utilities/constants';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth'));
  const [loggedOut, setLoggedOut] = useState(false);

  return (
    <Router>
      <div className="site-main-block">
        <Route
          path="/"
          render={(props) =>
            props.location.pathname !== constants.LOGIN_PATH && (
              <p></p>
              // <Header className="App-header" setLoggedOut={setLoggedOut} />
            )
          }
        />
        <Switch>
          <Route
            exact
            path={constants.LOGIN_PATH}
            component={() => (
              <Login
                setIsLoggedIn={setIsLoggedIn}
                loggedOut={loggedOut}
                setLoggedOut={setLoggedOut}
              />
            )}
          />
          <ProtectedRoute
            exact
            path={constants.HOME_PATH}
            isLoggedIn={isLoggedIn}
            component={HomePage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
