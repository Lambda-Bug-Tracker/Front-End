import React, { useState } from "react";

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
`

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(true)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
		password: "",
	})

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

  const handleSubmit = (e) => {
    e.preventDefault()
    setData({
      ...data,
      username: data.firstname+data.lastname
    })
    console.log(data)
    setIsLoading(true)
    dispatch(authenticate());
    history.push("/");
  };

  return (
    <Container>
      <div className="title">Register for Lambda Bugtracker</div>
      { isLoading ? <Loading /> : 
        <Form onSubmit={handleSubmit}>
          <Input type="text" name='firstname' value={data.firstname} onChange={handleChange} placeholder="First Name" />
          <Input type="text" name='lastname' value={data.lastname} onChange={handleChange} placeholder="Last Name" />
          <Input type="text" name='email' value={data.email} onChange={handleChange} placeholder="Email" />
          <Input type="password" name='password' value={data.password} onChange={handleChange} placeholder="Password" />
          <Button type="submit">Register</Button>
          {error && <div className="error">{error}</div>}
        </Form>
      }
    </Container>
  );
}