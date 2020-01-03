/* All users can add a bug
admins can edit and delete bug
populates with data*/
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Card, Form, Input } from 'bushido-strap'
import './BugModal.styles.scss';


export function BugModal() {
    const { id } = useParams();
    const [form, setForm] = useState({
        editNotes: false,
        isAdmin: false,
        addedNote: ''
    })
    const [bug, setBug] = useState({
        name:'the bug',
        description: 'rerenders constantly',
        notes: ['hello, I am m a note'],
        priority: 1,
        bugType: 1

    })
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    console.log(form)
    console.log(bug)
    return(
        <Card className='modal-card'>
            {!form.isAdmin &&
                <div>
                <h3 className="modal-title"> {bug.name} </h3>
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
                    {bug.notes.map((item, index) => {
                    return <p key={index}>{item}</p>
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
                        setBug({
                            ...bug,
                            notes:[...bug.notes, form.addedNote]
                        })
                        setForm({...form, addedNote:'', editNotes: false})
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
    )
}