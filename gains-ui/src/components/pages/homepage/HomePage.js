import React from 'react'
import GoogleLogin from 'react-google-login';
import constants from '../../../utilities/constants';
import Header from '../../header/Header'

const HomePage = () => {
  const responseGoogle = (response) => {
    sessionStorage.setItem("auth", response);
  }

  return (
    <div>
      <Header />
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

