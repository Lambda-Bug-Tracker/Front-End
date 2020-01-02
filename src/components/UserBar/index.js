import React from "react";
import "./styles.scss";
import { Wrapper, FlexBox } from "bushido-strap";

export default function UserBar () {

    return (
        <Wrapper className="user-container">
            <FlexBox className="user-list">
                <FlexBox className="admin-list">

                </FlexBox>
                <FlexBox className="dev-list">
                    
                </FlexBox>
                <FlexBox className="key-list">
                    
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}