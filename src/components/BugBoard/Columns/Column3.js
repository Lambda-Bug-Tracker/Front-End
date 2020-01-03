import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_REVIEW } from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
import '../BugGroup.styles.scss';
import { BugCard } from '../BugCard';

const allowDrop = (input) => {
    console.log(input)
    if(input.item.bugState === 3){
        return false
    }else{
        return true
    }
}

const Column3 = () => {
    const data = useSelector(state => state.projectBugs)
    const dispatch = useDispatch()
    const [{isOver, canDrop}, drop] = useDrop({
        accept: 'CARD',
        drop(item) {
            dispatch({type:UPDATE_REVIEW, payload: item})
        },
        canDrop: (item) => allowDrop(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })
   return (
    <div className="bug-group">
        <h4 className="progressh4">For Review</h4>
        <div className="progress-column" ref={drop}>
            {data.review.map((item, index) => {
                return <BugCard item={item} key={index} />
            })}
        </div>
    </div>
)

}
export default Column3;