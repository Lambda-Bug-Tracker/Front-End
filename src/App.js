import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "bushido-strap";

// Importing all routes
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import ReduxCounter from "./components/ReduxCounter";

const App = () => {
  return (
    <AppWrapper>
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
};

export default App;
