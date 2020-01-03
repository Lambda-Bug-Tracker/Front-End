import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";
import {slideInUp} from "react-animations";
import { useSelector } from 'react-redux'
import axios from 'axios'

import { Form, Input } from "bushido-strap";

const slideAnim = keyframes`${slideInUp}`

const FormContainer = styled.div`
    animation: 2s ${slideAnim};
    background-color: #f2f3f4;
    font-weight: normal;
    text-shadow: none;
    width: 220px;
    margin: 30px 10px;
    padding: 10px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .cancel{
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px;
        cursor: pointer;
    }
    input{
        margin-top: 20px;
    }
    button{
        width: 150px;
        margin: 15px auto;
        color: #fff;
        padding: 16px 32px;
        background: #bb1333;
        border: 0;
        cursor: pointer;
    }
`

export default function CreateProject (props) {
    const [form, setForm] = useState({
        name: '',
        description: '',

    })
    const firebase = useSelector(state => state.firebase)
    const handleCancel = e => {
        e.preventDefault()
        props.setIsCreating(false)
    }

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
            <div className='cancel' onClick={handleCancel}>X</div>
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
            <button type='submit'>Save</button>
        </Form>
        </FormContainer>
    )
}