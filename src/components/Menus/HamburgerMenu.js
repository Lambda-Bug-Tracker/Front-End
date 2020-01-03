import React, { useState } from "react";
import Burger from "@animated-burgers/burger-arrow";
import BurgerSqueeze from "@animated-burgers/burger-squeeze";
import "./menu-styles.styles.scss";

import BurgerImage from "../../images/black-hamburger-menu.png";
import { Wrapper, FlexBox } from "bushido-strap";
import "@animated-burgers/burger-arrow/dist/styles.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { Link } from "react-router-dom";
// trying to use this library: https://march08.github.io/animated-burgers/

const HamburgerMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const handleClick = () => {
    setOpenStatus(!openStatus);
    console.log(openStatus, "openStatus");
    //closeNav()
  };
  return (
    <FlexBox onClick={() => handleClick()} className="hamburger-container">
      <FlexBox className="hamburger-picture-container">
        <div className="burger-squeeze-container">
          <BurgerSqueeze isOpen={openStatus} alt="hamburger menu" />
        </div>
      </FlexBox>

      <div id="mySidenav" className={openStatus ? "sidenav" : "sidenavclose"}>
        {openStatus ? (
          <div>
            <Link to="/">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </FlexBox>
  );
};

export default HamburgerMenu;

/*
.sidenav 
*/
