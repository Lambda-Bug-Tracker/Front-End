/* holds -- state of bugs of that project and drag and drop. renders: state columns bug cards*/

import React, {useState} from "react";
import BugGroup from "./BugGroup.jsx";
import AddNewBug from "./AddNewBug";
import Logo from "../../images/tilt-left.png";
import HamburgerMenu from "../Menus/HamburgerMenu.js";
import "./styles.scss";
import { Wrapper, FlexBox } from "bushido-strap";

import UserBar from "../UserBar";

const BugBoard = () => {

  const [addingNewBug, setAddingNewBug ] = useState(false)

  const handleAddNewBug = e => {
    e.preventDefault();
    setAddingNewBug(true)
  }

  return (
    <Wrapper className="bug-board-container" width="100%">
      <FlexBox className="sidebar-container">
        <UserBar />
      </FlexBox>
      <div className="right-container">
        <FlexBox className="top-container" justify-content="center" width="100%">
          <FlexBox className="header-container" width="100%">
            <h1>Lambda Bug Tracker </h1>
            <img className="logo" alt="logo" src={Logo} />
          </FlexBox>
          <HamburgerMenu />
        </FlexBox>
        <main>
          {addingNewBug ? <AddNewBug setAddingNewBug={setAddingNewBug} /> : 
          <>
          <div className="title-container">
            <h2>Title</h2>
            <button onClick={handleAddNewBug}>Add New Bug</button>
          </div>
          <div className="bug-group-container">
            <BugGroup />
          </div>
          </>
          }
        </main>
      </div>
    </Wrapper>
  );
};

export default BugBoard;
