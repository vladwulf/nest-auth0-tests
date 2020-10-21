import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage } from "./pages/login";
import { AuthCallbackPage } from "./pages/auth-callback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback">
          <AuthCallbackPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
