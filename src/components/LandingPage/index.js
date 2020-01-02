import React from 'react';

import { Wrapper, Linkton, FlexBox } from 'bushido-strap';

export default function LandingPage() {
  return (
    <Wrapper justify="center">
      <h2>Welcome!</h2>
      <Linkton to="/register">Register Today!</Linkton>
      <FlexBox height="1.2rem"></FlexBox>
      <p>Already have an account?</p>
      <Linkton to="/login">Login Here</Linkton>
    </Wrapper>
  );
}
