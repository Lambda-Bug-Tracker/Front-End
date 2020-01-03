/* All users can add a bug
admins can edit and delete bug
populates with data*/
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Card, Form, Input } from 'bushido-strap'


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
        <Card>
            {!form.isAdmin &&
                <div>
                <h3> {bug.name} </h3>
                <p>{bug.description}</p>
                
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
                <div> Notes :
                    {bug.notes.map((item, index) => {
                    return <p key={index}>{item}</p>
                    })}
                </div>
                
                {form.editNotes &&
                    <Input 
                        placeholder='Add Note'
                        value={form.addedNote}
                        name='addedNote'
                        onChange={(e) => {
                            setForm({...form, [e.target.name]:e.target.value})
                        }}
                    />
                } 
                <div>
                {form.editNotes ? 
                    <button onClick={(e) => {
                        e.preventDefault()
                        setBug({
                            ...bug,
                            notes:[...bug.notes, form.addedNote]
                        })
                        setForm({...form, addedNote:'', editNotes: false})
                    }}>Add</button> :
                    <button onClick={(e) => {
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