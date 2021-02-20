import React from 'react'
import GoogleLogin from 'react-google-login';
import constants from '../../../utilities/constants';

const HomePage = () => {
  const responseGoogle = (response) => {
    sessionStorage.setItem("auth", response);
  }

  return (
    <div>
      <h1 >Swol Gains</h1>
      <GoogleLogin
        clientId={constants.OAUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <div>
        <iframe src="https://calendar.google.com/calendar/embed?src=c_cicgu662hcmbk5jd5fi73dmkik%40group.calendar.google.com&ctz=America%2FChicago" />
      </div>
    </div>
  )
}

export default HomePage

