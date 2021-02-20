import React from 'react'
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import constants from '../../utilities/constants';

export const Login = ({ setIsLoggedIn, loggedOut, setLoggedOut }) => {
  const history = useHistory();

  const responseGoogle = (response) => {
    const account = response.profileObj;
    const { name, email, googleId } = account;
    sessionStorage.setItem('auth', response.tokenId);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('id', googleId);
    setIsLoggedIn(true);
    setLoggedOut(false);
    history.push(constants.HOME_PATH);
  }

  return (
    <div>
      <h1>
        Login Page
      </h1>
      {loggedOut 
      ? <h2>Peace out Mother Fucker</h2>
      : <h2>Welcome!</h2> 
      }
      <GoogleLogin
        clientId={constants.OAUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login;