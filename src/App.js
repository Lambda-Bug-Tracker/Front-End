import React from "react";
import { useSelector } from "react-redux";

// Set up all routes in App
import { Route, Switch } from "react-router-dom";

//drag and drop library provider
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import BugBoard from "./components/BugBoard/index.js";

// Using custom styled components from Global folder in components
import { AppWrapper } from "bushido-strap";

// Importing all routes
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import { BugModal } from "./components/BugBoard/BugModal";

const App = () => {
  const firebase = useSelector(state => state.firebase);
  return (
    <DndProvider backend={Backend}>
      <AppWrapper>
        <Switch>
          <PrivateRoute path="/project/:id" component={BugBoard} />
          {/* <PrivateRoute path="/bug-modal/:id" component={BugModal} /> */}
        </Switch>
        <PrivateRoute exact path="/" component={Dashboard} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
