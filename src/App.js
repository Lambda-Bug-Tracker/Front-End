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
import { BugModal } from "./components/BugBoard/BugModal";

const App = () => {
  return (
    <DndProvider backend={Backend}>
      <AppWrapper>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/project" component={BugBoard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/dashboard" component={Dashboard} />

        <Route path="/bug-modal/:id" component={BugModal} />
      </AppWrapper>
    </DndProvider>
  );
};

export default App;
