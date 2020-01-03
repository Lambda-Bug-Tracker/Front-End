import React from "react";
import { Wrapper, FlexBox } from "bushido-strap";
import styled, { keyframes } from "styled-components";
import {flipInY} from "react-animations";


import Column1 from './Columns/Column1';
import Column2 from './Columns/Column2';
import Column3 from './Columns/Column3';
import Column4 from './Columns/Column4';

import "./BugGroup.styles.scss";

const flipAnim = keyframes`${flipInY}`;

const Container = styled.div`
  animation: 1.5s ${flipAnim};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
`

const BugGroup = () => {
  
  return (
    <Wrapper>
      <div className="bug-group-container">
        <FlexBox className="mobile-container" justify-content="space-between">
          <Container>
            <Column1 />
          </Container>
          <Container>
            <Column2 />
          </Container>
          <Container>
            <Column3 />
          </Container>
          <Container>
            <Column4 />
          </Container>
        </FlexBox>
      </div>
    </Wrapper>
  );
};

export default BugGroup;
