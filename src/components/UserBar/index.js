import React from "react";
import styled, { keyframes } from "styled-components";
import {slideInLeft} from "react-animations";
import { Wrapper, FlexBox } from "bushido-strap";
import "./styles.scss";
import b from "../../images/b.png";
import beetle from "../../images/beetle.png";
import butterfly from "../../images/butterfly.png";

const slideAnim = keyframes`${slideInLeft}`;

const Container = styled.div`
  animation: 1.5s ${slideAnim};
`

export default function UserBar() {
  return (
    <Container>
    <Wrapper className="user-container">
      <FlexBox className="user-list" justify-content="center" width="90%">
        <FlexBox className="admin-list">
          <h4>Admin</h4>
          <p>Jimmy</p>
        </FlexBox>
        <FlexBox className="dev-list">
          <h4>Devs</h4>
          <p>Chris</p>
          <p>Brianna</p>
          <p>Joscelyn</p>
          <p>Emily</p>
          <p>Tommy</p>
          <p>Aaron</p>
          <p>Robert</p>
        </FlexBox>
        <FlexBox className="key-list">
          <h4>Key</h4>
          <div className="key-row">
            <p href="/">UI/UX</p>
            <img id="butterfly" src={butterfly} alt="Butterfly" />
          </div>
          <div className="key-row">
            <p href="/">Front End</p>
            <img src={b} alt="Bee" />
          </div>
          <div className="key-row">
            <p href="/">Back End</p>
            <img src={beetle} alt="Beetle" />
          </div>
        </FlexBox>
      </FlexBox>
    </Wrapper>
    </Container>
  );
}
