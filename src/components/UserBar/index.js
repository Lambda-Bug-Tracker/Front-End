import React from "react";
import "./styles.scss";
import { Wrapper, FlexBox } from "bushido-strap";

import b from "../../images/b.png";
import beetle from "../../images/beetle.png"
import butterfly from "../../images/butterfly.png"

export default function UserBar () {

    return (
        <Wrapper className="user-container">
            <FlexBox className="user-list" justify-content="center" width="90%" >
                <FlexBox className="admin-list">
                    <h4>Admin</h4>
                    <p>Lucy</p>
                </FlexBox>
                <FlexBox className="dev-list">
                    <h4>Devs</h4>
                    <p>Karen</p>
                    <p>David</p>
                    <p>Jennifer</p>
                    <p>John</p>
                </FlexBox>
                <FlexBox className="key-list">
                    <h4>Key</h4>
                    <a href="/"><img id="butterfly" src={butterfly} alt="Butterfly" />UI/UX</a>
                    <a href="/"><img src={b} alt="Bee" />Front End</a>
                    <a href="/"><img src={beetle} alt="Beetle" />Back End</a>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}