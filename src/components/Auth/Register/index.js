import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form, Input, Button, Wrapper } from "bushido-strap";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import { emailRegistration, googleRegister } from "../../../store/actions/auth";

export default function Register() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => !state.firebase.auth.isEmpty);

  const [error, setError] = useState();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
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
    dispatch(emailRegistration(data));
  };

  const handleGoogleAuth = e => {
    e.preventDefault();
    dispatch(googleRegister());
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Container justify="center">
      <div className="title">Register for Lambda Bugtracker</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="first_name"
          value={data.first_name}
          onChange={handleChange}
          placeholder="First Name"
          ref={register}
        />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <Input
          type="text"
          name="last_name"
          value={data.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          ref={register}
        />
        {errors.last_name && <p>{errors.last_name.message}</p>}
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

        <Button type="submit">Register</Button>
        {error && <div className="error">{error}</div>}
      </Form>
      <p>or...</p>
      <Button onClick={handleGoogleAuth}>Register with Google!</Button>
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
  first_name: yup.string().required("First name required!"),
  last_name: yup.string().required("Last name required!"),
  email: yup
    .string()
    .email("Invalid email!")
    .required("Email required!"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters!")
    .required("Invalid password!")
});
