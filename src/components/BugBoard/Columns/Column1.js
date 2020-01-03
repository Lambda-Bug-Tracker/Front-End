
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_BUGSTOSQUASH } from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
import axios from 'axios'


import '../BugGroup.styles.scss';


import { BugCard } from '../BugCard'
const allowDrop = (input) => {
    console.log(input)
    if(input.item.progress_tag === 1){
        return false
    }else{
        return true
    }
}

const Column1 = () => {
const data = useSelector(state => state.projectBugs)
const dispatch = useDispatch()
console.log(data)
const [{isOver, canDrop}, drop] = useDrop({
    accept: 'CARD',
    drop(item) {
        console.log(item)
        axios.put(`https://lambda-bug-tracker.herokuapp.com/bugs/${item.item.id}`, {progress_tag: 1})
        .then(res => {
            console.log(res)
            dispatch({type: UPDATE_BUGSTOSQUASH, payload: item}) 
        })
        
    },
    canDrop: (item) => allowDrop(item),

    collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
    })

})
// console.log(data)
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