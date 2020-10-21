import { WebAuth } from "auth0-js";

const webAuth = new WebAuth({
  domain: "auth0-test23.eu.auth0.com",
  clientID: "67bpiCQSkwwnAwe0bAPAR0ouYtjok6yD",
});

export const AuthCallbackPage = () => {
  webAuth.parseHash({ hash: window.location.hash }, (err, res) => {
    console.log(err);
    console.log(res);
    console.log("auth0 hash:", res);
    if (res) {
      webAuth.client.userInfo(res.accessToken, function (err, user) {
        // Now you have the user's information
        console.log("user", user);
      });
    }
  });

  return null;
};
