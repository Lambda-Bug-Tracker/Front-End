import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form, Input, Button, Wrapper } from "bushido-strap";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import { login, googleLogin } from "../../../store/actions/auth";

export default function Register() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => !state.firebase.auth.isEmpty);

  const [error, setError] = useState();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login());
  };

  const handleGoogleLogin = e => {
    e.preventDefault();
    dispatch(googleLogin());
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Container justify="center">
      <div className="title">Login to Lambda Bugtracker</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button type="submit">Login</Button>
        {error && <div className="error">{error}</div>}
      </Form>
      <Button onClick={handleGoogleLogin}>Login with Google!</Button>
    </Container>
  );
}

const Container = styled(Wrapper)`
  .title {
    margin: 10px;
  }
  .error {
    text-align: center;
    margin: 5px;
    color: red;
  }
  p {
    color: red;
  }
`;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email!")
    .required("Email required!"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters!")
    .required("Invalid password!")
});
