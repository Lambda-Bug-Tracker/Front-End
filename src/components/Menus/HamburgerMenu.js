import React, { useState } from "react";
import Burger from "@animated-burgers/burger-arrow";
import "./menu-styles.styles.scss";
import '@animated-burgers/burger-arrow/dist/styles.css'


// tryign to use this library: https://march08.github.io/animated-burgers/
const HamburgerMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setOpenStatus(!openStatus);
  };
  return (
    <div className="hamburger-container">
      <Burger
        direction="right"
        onClick={() => handleClick()}
        isOpen={openStatus}
      />
    </div>
  );
};

export default HamburgerMenu;
