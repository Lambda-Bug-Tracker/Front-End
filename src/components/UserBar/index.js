import React from "react";
import "./styles.scss";
import { Wrapper, FlexBox } from "bushido-strap";

export default function UserBar () {

    return (
        <Wrapper className="user-container">
            <FlexBox className="user-list" justify-content="center" width="90%" >
                <FlexBox className="admin-list">
                    <h4>Admin</h4>
                    Lucy
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
                    <p>UI/UX</p>
                    <p>Front End</p>
                    <p>Back End</p>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}