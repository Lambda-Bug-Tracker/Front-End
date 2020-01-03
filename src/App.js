import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

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

const App = () => {
  return (
    <DndProvider backend={Backend}>
      <AppWrapper>
        {/* <BugBoard /> */}
        <Dashboard />
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
