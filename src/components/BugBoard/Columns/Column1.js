<<<<<<< HEAD
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {UPDATE_BUGSTOSQUASH} from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
=======
import React from 'react';

import '../BugGroup.styles.scss';
>>>>>>> 9facabd2f7095e8de550ac10863568c17c53c38e

import { BugCard } from '../BugCard'

const Column1 = () => {
const data = useSelector(state => state.projectBugs)
const dispatch = useDispatch()
const [{isOver}, drop] = useDrop({
    accept: 'CARD',
    drop(item) {
        dispatch({type: UPDATE_BUGSTOSQUASH, payload: item})
    },
    collect: monitor => ({
        isOver: !!monitor.isOver()
    })
})
console.log(data)
return (

    <div className="bug-group">
        <h4 className="progressh4">Bugs To Squash</h4>
         <div className="progress-column" ref={drop}>
            {data.bugsToSquash.map((item, index) => {
                return <BugCard item={item} key={index} />
            })}
        </div>
    </div>
)

}

export default Column1;