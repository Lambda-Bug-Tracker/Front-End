import React, { useState } from "react";
import Burger from "@animated-burgers/burger-arrow";
import "./menu-styles.styles.scss";



// tryign to use this library: https://march08.github.io/animated-burgers/

import BurgerImage from "../../images/black-hamburger-menu.png";
import { Wrapper, FlexBox } from "bushido-strap";
import "@animated-burgers/burger-arrow/dist/styles.css";
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
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
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
