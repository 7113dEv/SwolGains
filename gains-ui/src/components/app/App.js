import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../header/Header';
import Login from '../Login/Login';
import HomePage from '../pages/homepage/HomePage';
import constants from '../../utilities/constants';

import './App.css';
import Header from '../header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  return (
    <Router>
      <Header />
      <div className="site-main-block">
      <Route
          path={constants.LOGIN_PATH}
          render={(props) =>
            props.location.pathname !== constants.LOGIN_PATH && (
              <Header className="App-header" setLoggedOut={setLoggedOut} />
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
