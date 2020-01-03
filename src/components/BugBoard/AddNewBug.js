import React, {useState} from 'react'
import styled, { keyframes } from "styled-components";
import {slideInUp} from "react-animations";
import { useSelector } from 'react-redux'
import { Form, Input } from "bushido-strap";
import axios from 'axios'

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
    label{
        color: black;
        margin-top: 10px;
        margin-bottom: 5px;
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

    const [form, setForm] = useState({
        name: '',
        description: '',
        priority_tag: '',
        hash_tag: '',
    })

    const handleChange = e => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleCancel = e => {
        e.preventDefault()
        props.setAddingNewBug(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        axios.post(`https://lambda-bug-tracker.herokuapp.com/bugs/${props.id}`, form)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        props.setAddingNewBug(false)
    }

    return(
        <FormContainer>
        <div className='cancel' onClick={handleCancel}>X</div>
        <Form onSubmit={handleSubmit}>
            <Input name='name' placeholder="Bug Title" onChange={handleChange}/>
            <Input name='description' placeholder="Bug Description" onChange={handleChange}/>
            <label>Priority:</label>
            <select value={form.priority_tag} name='priority_tag' onChange={handleChange}>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
            </select>
            <label>Category:</label>
            <select value={form.hash_tag} name='hash_tag' onChange={handleChange}>
                <option value='1'>Front End</option>
                <option value='2'>Back End</option>
                <option value='3'>UI/UX</option>
            </select>
            <button type='submit'>Save</button>
        </Form>
        </FormContainer>
    )
}