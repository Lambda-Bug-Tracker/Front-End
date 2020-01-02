/* holds -- state of bugs of that project and drag and drop. renders: state columns bug cards*/

import React from "react";
import BugGroup from "./BugGroup.jsx";
import Logo from "../../images/tilt-left.png";

import "./styles.scss";
import { Wrapper, FlexBox } from "bushido-strap";

const BugBoard = () => {
  return (
    <Wrapper className="bug-board-container" width="100%">
      <FlexBox className="top-container" justify-content="center" width="100%">
        <FlexBox className="header-container" width="100%">
          <h1>Lambda Bug Tracker </h1>
          <FlexBox width="50px">
            <img className="logo" alt="logo" src={Logo} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
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
