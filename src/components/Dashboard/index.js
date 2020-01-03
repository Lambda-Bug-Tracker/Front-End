import React from "react";

import { Wrapper, Button } from "bushido-strap";

import { useDispatch } from "react-redux";

import { logout } from "../../store/actions/auth";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logout());
  }
  return (
    <Wrapper>
      <h1>Hello, world!</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Wrapper>
  );
}
