/* renders -- name, description, create at?? priority tag*/

/* admin edit and delete bug. (does not partain toa dditional notes*/

/*on click -- brings up modal of notes*/

import React from 'react'

import { useDrag } from 'react-dnd'

import { Card } from 'bushido-strap'
import butterfly from '../../images/butterfly.png'
import beetle from '../../images/beetle.png'
import bee from '../../images/b.png'
const priorityTest = 3
const typeTest = 3


export function BugCard(props) {
    const [{isDragging}, drag] = useDrag({
        item: {type: 'CARD', item: props.item},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return(
        <Card ref={drag} style={{
            opacity: isDragging ? 0.5 : 1,
            boxShadow: priorityTest === 1 ? '0 0.3rem 1rem red' :
                priorityTest === 2 ?  '0 0.3rem 1rem yellow' :
                priorityTest === 3 ? '0 0.3rem 1rem blue' :
                null
            }} width='90%' align='flex-start'  >
            <div >
            <img src={
                typeTest === 1 ? bee :
                typeTest === 2 ? beetle :
                typeTest === 3 ? butterfly:
                null
            }  style={{width: '20%'}}/> 
            <span> {props.name} Bug Name </span>
            </div>
        
           <p> {props.description} Bug Description </p> 
        <h5>{priorityTest === 1 && '!'}{priorityTest === 2 && '!!'}{priorityTest === 3 && '!!!'}</h5>
        </Card>
    )
}


