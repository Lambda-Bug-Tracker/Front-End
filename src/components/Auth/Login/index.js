import React from "react";

import { Wrapper, Form, Input, Button } from "bushido-strap";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../../store/actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(authenticate());
    history.push("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
}
