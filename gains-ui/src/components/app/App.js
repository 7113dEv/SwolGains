import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../header/Header';
import Login from '../Login/Login';
import HomePage from '../pages/homepage/HomePage';
import constants from '../../utilities/constants';
import './App.css';
import AerobicStamina from '../pages/tailors/AerobicStamina';
import GeneralMuscleGain from '../pages/tailors/GeneralMuscleGain';
import Flexibility from '../pages/tailors/Flexibility';
import HigherEnergy from '../pages/tailors/HigherEnergy';
import WorkoutGeneratorPage from '../pages/tailors/WorkoutGeneratorPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("auth"));
  const [loggedOut, setLoggedOut] = useState(false);

  return (
    <Router>
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
          <ProtectedRoute
            exact
            path={constants.GENERAL_PATH}
            isLoggedIn={isLoggedIn}
            component={GeneralMuscleGain}
          />
          <ProtectedRoute
            exact
            path={constants.FLEXIBLE_PATH}
            isLoggedIn={isLoggedIn}
            component={Flexibility}
          />
          <ProtectedRoute
            exact
            path={constants.AEROBIC_PATH}
            isLoggedIn={isLoggedIn}
            component={AerobicStamina}
          />
          <ProtectedRoute
            exact
            path={constants.HIGHER_PATH}
            isLoggedIn={isLoggedIn}
            component={HigherEnergy}
          />
          <ProtectedRoute
            exact
            path={constants.GENERATE_PATH}
            isLoggedIn={isLoggedIn}
            component={WorkoutGeneratorPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
