/* renders -- name, description, create at?? priority tag*/

/* admin edit and delete bug. (does not partain toa dditional notes*/

/*on click -- brings up modal of notes*/

import React from 'react'

import { useDrag } from 'react-dnd'

import { Card } from 'bushido-strap'
import butterfly from '../../images/butterfly.png'


export function BugCard(props) {
    const [{isDragging}, drag] = useDrag({
        item: {type: 'CARD', item: props.item},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return(
        <Card ref={drag} style={{opacity: isDragging ? 0.5 : 1}} width='90%' align='flex-start'  >
            <div >
            <img src={butterfly}  style={{width: '20%'}}/> 
            <span> {props.name} Bug Name </span>
            </div>
        
           <p> {props.description} Bug Description </p> 
           <h5>!</h5>
        </Card>
    )
}


