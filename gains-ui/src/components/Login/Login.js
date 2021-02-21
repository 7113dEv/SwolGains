import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import constants from '../../utilities/constants';
import styles from './Login.module.css';
import { VideoShow } from '../VideoShow/VideoShow';

export const Login = ({ setIsLoggedIn, loggedOut, setLoggedOut }) => {
  const history = useHistory();

  if (document.getElementById('video')) {
    document.querySelector('video').playbackRate = 0.9;
  }

  const responseGoogle = (response) => {
    setLoggedOut(false);
    if (!response.error) {
      const account = response.profileObj;
      const { name, email, googleId } = account;
      sessionStorage.setItem('auth', response.tokenId);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('id', googleId);
      setIsLoggedIn(true);
      history.push(constants.HOME_PATH);
    }
  }

  const handleGuestLogin = () => {
    setLoggedOut(false);
    sessionStorage.setItem('auth', 'guest');
    sessionStorage.setItem('name', "Guest");
    setIsLoggedIn(true);
  }

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            Swol Gains Workout Generator
        </h1>
          {loggedOut
            ? <h2>Peace out Mother Fucker</h2>
            : <h2>Welcome!</h2>
          }
          <div className={styles.loginBtnDiv}>
            <GoogleLogin
              className={styles.googleLoginBtn}
              clientId={constants.OAUTH_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <NavLink to={constants.HOME_PATH} className={styles.guestLogin} onClick={handleGuestLogin}>Continue, as a guest</NavLink>
          </div>
        </div>
      </div>
      <VideoShow video={constants.videos.male_jumprope} />
    </>
  )
}

export default Login;