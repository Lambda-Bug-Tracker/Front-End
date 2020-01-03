import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_REVIEW } from '../../../store/actions/projectBugs'
import { useDrop } from 'react-dnd'
import '../BugGroup.styles.scss';
import { BugCard } from '../BugCard';

const Column3 = () => {
    const data = useSelector(state => state.projectBugs)
    const dispatch = useDispatch()
    const [{isOver}, drop] = useDrop({
        accept: 'CARD',
        drop(item) {
            dispatch({type:UPDATE_REVIEW, payload: item})
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
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