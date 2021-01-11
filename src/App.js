import React from "react";
import "./styles.css";
import GoogleLogin from 'react-google-login';

export default function App() {
  const responseSucessGoogle = (event) => {
    console.log(event)
  }
  const responseFailureGoogle = (event) => {
    console.log(event)
  }
  return (
    <div className="App">
      <GoogleLogin
        clientId='616347954905-bdpnula1mbrjlop0ll1iio8icb4cc9l8.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseSucessGoogle}
        onFailure={responseFailureGoogle}/>
    </div>
  );
}
