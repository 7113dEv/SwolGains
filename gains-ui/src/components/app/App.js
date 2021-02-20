import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import constants from '../../utilities/constants';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth'));

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
