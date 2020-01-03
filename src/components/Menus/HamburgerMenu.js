import React from "react";
import { FlexBox, Wrapper } from "bushido-strap";
import Burger from "@animated-burgers/burger-arrow";
import "./menu-styles.styles.scss";

import "@animated-burgers/burger-arrow/dist/styles.css";

const HamburgerMenu = () => {
  return (
    <div className="background-black">
      <Burger />
    </div>
  );
};

export default HamburgerMenu;
