<<<<<<< HEAD
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_SQUASHING } from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
import { BugCard } from '../BugCard'
=======
import React from 'react';
import '../BugGroup.styles.scss';
>>>>>>> 9facabd2f7095e8de550ac10863568c17c53c38e

const Column2 = () => {
    const data = useSelector(state => state.projectBugs)
    const dispatch = useDispatch()
    const [{isOver}, drop] = useDrop({
        accept: 'CARD',
        drop(item) {
            dispatch({type:UPDATE_SQUASHING, payload: item})
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })
    return (
    <div className="bug-group">
        <h4 className="progressh4">Currently Squashing</h4>
        <div className="progress-column" ref={drop}>
            {data.squashing.map((item, index) => {
                return <BugCard item={item} key={index} />
            })}
        </div>
    </div>
)
}

export default Column2;