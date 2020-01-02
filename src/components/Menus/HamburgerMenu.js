import React from "react";
import { FlexBox } from "bushido-strap";
import HamburgerPicture from "../../images/black-hamburger-menu.png";
const HamburgerMenu = () => {
  return (
    <FlexBox
      justify-content="center"
      width="50px"
      className="hamburger-menu-container"
    >
      <img
        className="hamburger-menu"
        alt="hamburger-menu"
        src={HamburgerPicture}
      />
    </FlexBox>
  );
};

export default HamburgerMenu;
