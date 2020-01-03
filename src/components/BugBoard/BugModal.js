/* All users can add a bug
admins can edit and delete bug
populates with data*/
import React, { useState } from 'react'


export function BugModal() {
    const [form, setForm] = useState({
        name:'',
        description: '',
        notes: [],
        priority: '',
        bugType: ''

    })
    return(
        <div>

        </div>
    )
}