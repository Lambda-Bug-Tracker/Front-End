import React from "react";
import { Wrapper, FlexBox } from "bushido-strap";



import Column1 from './Columns/Column1';
import Column2 from './Columns/Column2';
import Column3 from './Columns/Column3';
import Column4 from './Columns/Column4';

import "./BugGroup.styles.scss";

const BugGroup = () => {
  
  return (
    <Wrapper>
      <div className="bug-group-container">
        <FlexBox className="mobile-container" justify-content="space-between">
          <Column1 />
          <Column2 />
          <Column3 />
          <Column4 />
        </FlexBox>
      </div>
    </Wrapper>
  );
};

export default BugGroup;
