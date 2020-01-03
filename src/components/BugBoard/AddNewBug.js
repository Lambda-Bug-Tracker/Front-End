import React from 'react'
import axios from 'axios'
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
    margin-top: -150px;
    @media screen and (max-width: 768px) {
        margin-top: 50px;
    }
    position: relative;
    .cancel{
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px;
        color: black;
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

export default function AddNewBug (props) {

    const handleCancel = e => {
        e.preventDefault()
        props.setAddingNewBug(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.setAddingNewBug(false)
    }

    return(
        <FormContainer>
        <div className='cancel' onClick={handleCancel}>X</div>
        <Form onSubmit={handleSubmit}>
            <Input name='title' placeholder="Bug Title"/>
            <Input name='title' placeholder="Bug Name"/>
            <Input name='title' placeholder="Something else..."/>
            <button type='submit'>Save</button>
        </Form>
        </FormContainer>
    )
}