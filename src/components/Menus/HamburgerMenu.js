import React, { useState } from "react";
import Burger from "@animated-burgers/burger-arrow";
import "./menu-styles.styles.scss";



// tryign to use this library: https://march08.github.io/animated-burgers/

import BurgerImage from "../../images/black-hamburger-menu.png";
import { Wrapper, FlexBox } from "bushido-strap";
import "@animated-burgers/burger-arrow/dist/styles.css";
import { Link } from "react-router-dom";
// trying to use this library: https://march08.github.io/animated-burgers/

const HamburgerMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const handleClick = () => {
    setOpenStatus(!openStatus);
    //closeNav()
  };
  return (
    <FlexBox className="hamburger-container">
      <FlexBox className="hamburger-picture-container">
        <img
          alt="hamburger menu"
          src={BurgerImage}
          className="open"
          width="50"
          onClick={() => handleClick()}
        />
      </FlexBox>

      <div id="mySidenav" className={openStatus ? "sidenav" : ""}>
        <Burger
          direction="right"
          onClick={() => handleClick()}
          isOpen={openStatus}
        />
        {openStatus ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
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
