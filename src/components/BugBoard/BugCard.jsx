/* renders -- name, description, create at?? priority tag*/

/* admin edit and delete bug. (does not partain toa dditional notes*/

/*on click -- brings up modal of notes*/

import React from "react";
import { Link } from "react-router-dom";

import { useDrag } from "react-dnd";

import { Card } from "bushido-strap";
import butterfly from "../../images/butterfly.png";
import beetle from "../../images/beetle.png";
import bee from "../../images/b.png";
import axios from "axios";
const priorityTest = 3;
const typeTest = 3;

export function BugCard(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "CARD", item: props.item },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const handleDelete = e => {
      e.preventDefault()
      console.log('delete',props.item)
    //   axios.delete(`https://lambda-bug-tracker.herokuapp.com/bugs/${id}`)
  }

  return (
    <Link to={`/bug-modal/${props.item.id}`}>
      <Card
        className="bug-card"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          border:
            props.item.priority_tag === 1
              ? "3px solid #13BB93"
              : props.item.priority_tag === 2
              ? "3px solid #FFFFA1"
              : props.item.priority_tag === 3
              ? "3px solid #bb1333"
              : null
        }}
        width="90%"
        align="flex-start"
      >
        <div className='delete-btn' onClick={handleDelete}>X</div>
        <div className='bug-card-wrapper'>
            <div className="bug-card-title">
            <img
                src={
                props.item.hash_tag === 1
                    ? bee
                    : props.item.hash_tag === 2
                    ? beetle
                    : props.item.hash_tag === 3
                    ? butterfly
                    : null
                }
                style={{ width: "20%" }}
            />
            <span className="bugname">{props.item.bug_name}</span>
            </div>
        <div className='bug-description'>{props.item.description}</div>
        <span>Priority Level:</span>
        <h5>
          {props.item.priority_tag === 1 && "!"}
          {props.item.priority_tag === 2 && "!!"}
          {props.item.priority_tag === 3 && "!!!"}
        </h5>
        </div>
      </Card>
    </Link>
  );
}
