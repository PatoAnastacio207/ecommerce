import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function GoogleTest() {
  const googleAuth = ({ profileObj }) => {
    axios({
      method: "post",
      url: "/api/auth/google",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
        first_name: profileObj.givenName,
        last_name: profileObj.familyName,
      },
    })
      .then((res) => console.log(res.data))
      .then(() => {
          return axios.get('/api/autho/logged').then(data => console.log(data))
      })
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="853910693747-q00iaamotqqnprgqeju02cjqnkb7rtcl.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    >
      <span>Sign Up with Google</span>
    </GoogleLogin>
  );
}

export default GoogleTest;