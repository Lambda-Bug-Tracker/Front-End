import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";
import {slideInUp} from "react-animations";
import { useSelector } from 'react-redux'
import axios from 'axios'

import { Form, Input, Button } from "bushido-strap";

const slideAnim = keyframes`${slideInUp}`

const FormContainer = styled.div`
    animation: 2s ${slideAnim};
    background-color: #f2f3f4;
    font-weight: normal;
    text-shadow: none;
    width: 220px;
    /* height: 50px; */
    margin: 30px 10px;
    padding: 10px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        margin-top: 10px;
    }
    button{
        width: 150px;
        margin: 0 auto;
    }
`

export default function CreateProject (props) {
    const [form, setForm] = useState({
        name: '',
        description: '',

    })
    const firebase = useSelector(state => state.firebase)
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`https://lambda-bug-tracker.herokuapp.com/projects/${firebase.auth.uid}`, form)
            .then(res => {
                console.log(res)
                props.setProjects(res.data.projects)
            })
            .catch(err => console.log(err))
        props.setIsCreating(false)
    }

    return(
        <FormContainer>
        <Form onSubmit={handleSubmit}>
            <Input 
                name='name' 
                placeholder="Project Title"
                value={form.name}
                onChange={(e) => {
                    setForm({...form, [e.target.name]:e.target.value})
                }}
                />
            <Input 
                name='description' 
                placeholder="Project Description"
                value={form.description}
                onChange={(e) => setForm({...form, [e.target.name]:e.target.value})}
                />
            {/* <Input name='title' placeholder="Something else..."/> */}
            <Button type='submit'>Save</Button>
        </Form>
        </FormContainer>
    )
}