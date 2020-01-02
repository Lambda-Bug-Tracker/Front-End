/* holds -- state of bugs of that project and drag and drop. renders: state columns bug cards*/

import React from "react";
import BugGroup from "./BugGroup.jsx";
import Logo from "../../images/logo.png";

const BugBoard = () => {
  return (
    <div>
      <header>
        <div className="title">
          <h1>Lambda Bug Tracker</h1>
          <img alt="hamburger-menu" src={Logo} />
        </div>
        <div className="hamburger-menu">
          <img alt="hamburger-menu" src={Logo} />
        </div>
      </header>
      <main>
        <h2>Title</h2>
        <div className="bug-group-container">
          <BugGroup />
        </div>
      </main>
    </div>
  );
};

export default BugBoard;
