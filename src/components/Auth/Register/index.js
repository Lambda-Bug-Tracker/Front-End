import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import lambdaBanner from "../../../assets/img/lambda-banner.png";

import { Form, Input, Button } from "bushido-strap";

import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import { emailRegistration, googleRegister } from "../../../store/actions/auth";

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

export default function Register() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => !state.firebase.auth.isEmpty);

  const [error, setError] = useState();

  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema
  });

  const onSubmit = e => {
    e.preventDefault();
    const data = getValues()
    dispatch(emailRegistration(data));
  };

  const handleGoogleAuth = e => {
    e.preventDefault();
    const data = getValues()
    dispatch(googleRegister(data));
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <div className='register'>
      <div className="main">
        <div className="dashboard">
          <div className="top-row">
            <a href="/">
              <img src={lambdaBanner} alt="Lambda School Logo" />
            </a>
          </div>
          <div className="title">Register for Lambda Bugtracker</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              ref={register}
            />
            {errors.first_name && <p>{errors.first_name.message}</p>}
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              ref={register}
            />
            {errors.last_name && <p>{errors.last_name.message}</p>}
            <Input
              type="text"
              name="email"
              placeholder="Email"
              ref={register}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
            />
            {errors.password && <p>{errors.password.message}</p>}
  
            <button type="submit">Register</button>
            {error && <div className="error">{error}</div>}
          </Form>
          <button onClick={handleGoogleAuth}>Register with Google!</button>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0,100 0,100 100,0 100" />
        </svg>
      </div>
    </div>
  );
}
