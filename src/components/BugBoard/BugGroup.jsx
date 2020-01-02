import React from "react";
import { Wrapper, FlexBox } from "bushido-strap";

import "./BugGroup.styles.scss";

const BugGroup = () => {
  return (
    <Wrapper>
      <div className="bug-group-container">
        <FlexBox className="mobile-container" justify-content="space-between">
          <div className="bug-group">
            <h4 className="progressh4">Bugs To Squash</h4>
            <div className="progress-column" />
          </div>
          <div className="bug-group">
            <h4 className="progressh4">Currently Squashing</h4>
            <div className="progress-column" />
          </div>
          <div className="bug-group">
            <h4 className="progressh4">For Review</h4>
            <div className="progress-column" />
          </div>
          <div className="bug-group">
            <h4 className="progressh4">Squashed</h4>
            <div className="progress-column" />
          </div>
        </FlexBox>
      </div>
    </Wrapper>
  );
};

export default BugGroup;
