import React from "react";
import { WebAuth } from "auth0-js";

const webAuth = new WebAuth({
  domain: "auth0-test23.eu.auth0.com",
  clientID: "k7hcNHfwLURgA3pgLMRfdRg7ieddqEzp",
  callbackUrl: "http://localhost:3000/callback/",
});

export const LoginPage = () => {
  function handleAuthWithGoogle() {
    webAuth.authorize({
      connection: "google-oauth2",
      domain: "auth0-test23.eu.auth0.com",
      redirectUri: "http://localhost:3000/callback/",
      responseType: "token",
    });
  }

  function handleLocalAuth(e) {
    e.preventDefault();

    webAuth.client.login(
      {
        realm: "spa-db",
        username: "agaev.vladimir2@gmail.com",
        password: "KofD28giIAxEF6y",
      },
      (err, res) => {
        console.log(err);
        console.log(res);
      }
    );
  }

  function handleLocalSignup(e) {
    e.preventDefault();

    webAuth.signup(
      {
        connection: "spa-db",
        email: "agaev.vladimir2@gmail.com",
        password: "KofD28giIAxEF6y",
      },
      (err, res) => {
        console.log(res);
      }
    );
  }

  return (
    <div className="App">
      <h4>Login with google</h4>
      <button onClick={() => handleAuthWithGoogle()}>Login with Google</button>

      <h4>Login with local</h4>
      <form onSubmit={handleLocalAuth}>
        <button>login user</button>
      </form>

      <h4>Signup with local</h4>
      <form onSubmit={handleLocalSignup}>
        <button>create user</button>
      </form>
    </div>
  );
};
