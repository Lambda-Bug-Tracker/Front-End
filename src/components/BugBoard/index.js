/* holds -- state of bugs of that project and drag and drop. renders: state columns bug cards*/

import React from "react";
import BugGroup from "./BugGroup.jsx";
import Logo from "../../images/logo.png";
import HamburgerMenu from "../../images/hamburger-menu.png";
import "./styles.scss";
import { Wrapper } from "bushido-strap";

const BugBoard = () => {
  return (
    <Wrapper>
      <header>
        <div className="title">
          <h1>Lambda Bug Tracker</h1>
          <img alt="logo" src={Logo} />
        </div>
        <div className="hamburger-menu-1">
          <img alt="hamburger-menu" src="{HamburgerMenu}" />
        </div>
      </header>
      <main>
        <h2>Title</h2>
        <div className="bug-group-container">
          <BugGroup />
        </div>
      </main>
    </Wrapper>
  );
};

export default BugBoard;
