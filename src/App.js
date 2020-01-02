import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

//drag and drop library provider
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

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
    <DndProvider backend={Backend}>
      <AppWrapper>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/counter" component={ReduxCounter} />
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
