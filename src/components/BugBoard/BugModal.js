/* All users can add a bug
admins can edit and delete bug
populates with data*/
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Card, Form, Input, Wrapper } from 'bushido-strap'
import './BugModal.styles.scss';
import axios from 'axios';


export function BugModal() {
    const { id } = useParams();
    const [form, setForm] = useState({
        editNotes: false,
        isAdmin: false,
        addedNote: ''
    })
    const [bug, setBug] = useState({
        bug_name:'the bug',
        description: 'rerenders constantly',
        priority_tag: 1,
        progress_tag: 1

    })
    const [notes, setNotes] = useState()
    console.log(notes)
    console.log(bug)
    useEffect(() => {
        axios.get(`https://lambda-bug-tracker.herokuapp.com/bugs/specific/${id}`)
        .then(res => {
            console.log(res)
            setBug({...bug,
                bug_name: res.data.bugs[0].bug_name,
                description: res.data.bugs[0].description,
                priority_tag: res.data.bugs[0].priority_tag,
                progress_tag: res.data.bugs[0].progress_tag
            })
        })
        .then(
            axios.get(`https://lambda-bug-tracker.herokuapp.com/notes/${id}`)
            .then(res => {
                console.log(res)
                setNotes(res.data.notes)
            })
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
        
    }, [form])
    
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    
    return(
        <Wrapper>
        <Card className='modal-card'>
            {!form.isAdmin &&
                <div>
                <h3 className="modal-title"> {bug.bug_name} </h3>
                <p className='bug-description'>{bug.description}</p>
                
                <p> {bug.priority} </p>
                <p> {bug.bugType} </p>
            </div>
            }
            <Form onSubmit={handleSubmit}>
                {form.isAdmin && 
                <Input 
                    value={bug.name}
                    name='name'
                    onChange={(e) => setBug({...bug, [e.target.name]:e.target.value})}
                />
                }
                {form.isAdmin && 
                <Input 
                    value={bug.description}
                    name='description'
                    onChange={(e) => setBug({...bug, [e.target.name]:e.target.value})}
                />
                }
                {form.isAdmin && 
                <Input 
                    value={bug.priority}
                    name='priority'
                    onChange={(e) => setBug({...bug, [e.target.name]:e.target.value})}
                />
                }
                {form.isAdmin && 
                <Input 
                    value={bug.bugType}
                    name='bugType'
                    onChange={(e) => setBug({...bug, [e.target.name]:e.target.value})}
                />
                }
                <div className='bug-notes'> 
                    <h4>Notes :</h4>
                    {notes && notes.map((item, index) => {
                    return <p key={index}>{item.additional_note}</p>
                    })}
                </div>
                
                {form.editNotes &&
                    <Input 
                    className="addnote-input"
                        placeholder='Add Note'
                        value={form.addedNote}
                        name='addedNote'
                        onChange={(e) => {
                            setForm({...form, [e.target.name]:e.target.value})
                        }}
                    />
                } 
                <div >
                {form.editNotes ? 
                    <button onClick={(e) => {
                        e.preventDefault()
                        axios.post(`https://lambda-bug-tracker.herokuapp.com/notes/${id}`, {note: form.addedNote})
                        .then(res => {
                            console.log(res)
                            // setNotes([...notes, form.addedNote])
                            setForm({...form, addedNote:'', editNotes: false})
                        })
                        .catch(err => console.log(err))
                        
                    }}>Add</button> :
                    <button className="addnotes-button" onClick={(e) => {
                        e.preventDefault()
                        setForm({
                            ...form, 
                            editNotes: true
                        })
                    }}>Add Notes</button>
                }
                
                </div>
                {form.isAdmin && 
                    <button type='submit'>Submit Changes</button> 
                }
                        
            </Form>  
        </Card>
        </Wrapper>
    )
}