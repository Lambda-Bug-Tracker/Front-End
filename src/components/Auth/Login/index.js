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
  // const [data, setData] = useState({
  //   email: "",
  //   password: ""
  // });

  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema
  });
<<<<<<< HEAD
 
  const handleChange = event => {
    const values = getValues()
    console.log(values)
    // setData({
    //   ...data,
    //   [event.target.name]: event.target.value
    // });
  };
=======
>>>>>>> 0890467105cbb7f918e89a61a062b31ed58525b5

  const onSubmit = e => {
    e.preventDefault();
    const data = getValues()
    console.log(data)
    dispatch(login());
  };

  const handleGoogleLogin = e => {
    e.preventDefault();
    dispatch(googleLogin());
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <div className='login-page'>
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
            <button type="submit">Login</button>
            {error && <div className="error">{error}</div>}
          </Form>
          <button onClick={handleGoogleLogin}>Login with Google!</button>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0,100 0,100 100,0 100" />
        </svg>
      </div>
    </div>
  );
}
