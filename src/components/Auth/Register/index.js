import React, { useState } from "react";

import { Wrapper, Form, Input, Button } from "bushido-strap";

import styled from 'styled-components'

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../../store/actions/auth";

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .error {
    text-align: center;
    margin: 5px;
    color: red;
  }
`

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [error, setError] = useState(true)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
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
    console.log(data)
    // dispatch(authenticate());
    // history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name='firstname' value={data.firstname} onChange={handleChange} placeholder="First Name" />
        <Input type="text" name='lastname' value={data.lastname} onChange={handleChange} placeholder="Last Name" />
        <Input type="text" name='email' value={data.email} onChange={handleChange} placeholder="Email" />
        <Input type="password" name='password' value={data.password} onChange={handleChange} placeholder="Password" />
        <Button type="submit">Register</Button>
        {error && <div className="error">{error}</div>}
      </Form>
    </Container>
  );
}