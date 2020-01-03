import React, { useState } from "react";
import Burger from "@animated-burgers/burger-arrow";
import "./menu-styles.styles.scss";

import "@animated-burgers/burger-arrow/dist/styles.css";
// trying to use this library: https://march08.github.io/animated-burgers/
const HamburgerMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const handleClick = () => {
    setOpenStatus(!openStatus);
    //closeNav()
  };
  return (
    <div className="hamburger-container">
      <div className="open" onClick={() => handleClick()}>
        X
      </div>
      <div id="mySidenav" className={openStatus ? "sidenav" : ""}>
        <Burger
          direction="right"
          onClick={() => handleClick()}
          isOpen={openStatus}
        />
        {openStatus ? (
          <div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>)
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;

/*
.sidenav 
*/
