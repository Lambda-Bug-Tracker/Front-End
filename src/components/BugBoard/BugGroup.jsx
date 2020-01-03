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
  width: 99%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .one{
    animation: 1.5s ${flipAnim};
    margin: 0 20px;
    width: 100%;
  }
  .two{
    animation: 1.8s ${flipAnim};
    margin: 0 20px;
    width: 100%;
  }
  .three{
    animation: 2.1s ${flipAnim};
    margin: 0 20px;
    width: 100%;
  }
  .four{
    animation: 2.4s ${flipAnim};
    margin: 0 20px;
    width: 100%;
  }
`

const BugGroup = (props) => {
  
  return (
    <Wrapper>
      <div className="bug-group-container">
          <Container className="mobile-conainter">
            <div className="one">
              <Column1 {...props}/>
            </div>
            <div className="two">
              <Column2 />
            </div>
            <div className="three">
              <Column3 />
            </div>
            <div className="four">
            <Column4 />
            </div>
          </Container>
      </div>
    </Wrapper>
  );
};

export default BugGroup;
