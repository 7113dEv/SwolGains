import React from 'react';
import GoogleLogin from 'react-google-login';
import constants from '../../constants';

import './App.css';

function App() {  

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <h1 >Swol Gains</h1>
      <button>General Muscle Gain</button>
      <button>Flexibility</button>
      <button>Aerobic Stamina</button>
      <button>Higher Energy</button>
      <button>Targeted Muscle Groups</button>
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
    </>
  );
}

export default App;
