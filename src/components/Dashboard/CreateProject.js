import React from 'react'
import styled, { keyframes } from "styled-components";
import {slideInUp} from "react-animations";

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
        margin: 15px auto;
        color: #fff;
        padding: 16px 32px;
        background: #bb1333;
        border: 0;
        cursor: pointer;
    }
`

export default function CreateProject (props) {

    const handleSubmit = e => {
        e.preventDefault()
        props.setIsCreating(false)
    }

    return(
        <FormContainer>
        <Form onSubmit={handleSubmit}>
            <Input name='title' placeholder="Project Title"/>
            <button type='submit'>Save</button>
        </Form>
        </FormContainer>
    )
}