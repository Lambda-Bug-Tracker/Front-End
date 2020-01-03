
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_SQUASHING } from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
import { BugCard } from '../BugCard'
import axios from 'axios'


import '../BugGroup.styles.scss';
const allowDrop = (input) => {
    console.log(input)
    if(input.item.progress_tag === 2){
        return false
    }else{
        return true
    }
}

const Column2 = () => {
    const data = useSelector(state => state.projectBugs)
    const dispatch = useDispatch()
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'CARD',
        drop(item) {
            axios.put(`https://lambda-bug-tracker.herokuapp.com/bugs/${item.item.id}`, {progress_tag: 2})
        .then(res => {
            console.log(res)
            dispatch({type:UPDATE_SQUASHING, payload: item})
        })
            
        },
        canDrop: (item) => allowDrop(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
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