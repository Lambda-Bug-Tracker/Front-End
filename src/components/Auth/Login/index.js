import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import lambdaBanner from "../../../assets/img/lambda-banner.png";

import { Form, Input, Button } from "bushido-strap";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import { login, googleLogin } from "../../../store/actions/auth";

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
    <div className="main">
      <div className="dashboard">
        <div className="top-row">
          <a href="/">
            <img src={lambdaBanner} alt="Lambda School Logo" />
          </a>
        </div>
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
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0 0,100 0,100 100,0 100" />
      </svg>
    </div>
  );
}
