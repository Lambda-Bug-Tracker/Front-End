import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Loading from '../../Loading/'

import { Form, Input, Button } from "bushido-strap";

import styled from 'styled-components'

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../../store/actions/auth";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .title{
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
`
const schema = yup.object().shape({
  email: yup.string().email('Invalid email!').required('Email required!'),
  password: yup.string().min(8, 'Minimum 8 characters!').required('Invalid password!'),
});



export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(true)
  const [data, setData] = useState({
    email: "",
		password: "",
  })
  
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

  const onSubmit = data => {
    console.log(data)
    setIsLoading(true)
    dispatch(authenticate());
    history.push("/");
  };

  return (
    <Container>
      <div className="title">Login to Lambda Bugtracker</div>
      { isLoading ? <Loading /> : 
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" name='email' value={data.email} onChange={handleChange} placeholder="Email" ref={register} />
          {errors.email && <p>{errors.email.message}</p>}
          <Input type="password" name='password' value={data.password} onChange={handleChange} placeholder="Password" ref={register} />
          {errors.password && <p>{errors.password.message}</p>}
          <Button type="submit">Login</Button>
          {error && <div className="error">{error}</div>}
        </Form>
      }
    </Container>
  );
}