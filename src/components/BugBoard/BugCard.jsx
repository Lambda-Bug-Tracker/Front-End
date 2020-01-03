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
const priorityTest = 3;
const typeTest = 3;

export function BugCard(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "CARD", item: props.item },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <Link to={`/bug-modal/${props.item.id}`}>
      <Card
        className="bug-card"
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          boxShadow:
            props.item.priority_tag === 1
              ? "0 0.3rem 1rem red"
              : props.item.priority_tag === 2
              ? "0 0.3rem 1rem yellow"
              : props.item.priority_tag === 3
              ? "0 0.3rem 1rem blue"
              : null
        }}
        width="90%"
        align="flex-start"
      >
        <div>
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
          <span> {props.item.bug_name} </span>
        </div>

        <p> {props.item.description} </p>
        <h5>
          {props.item.priority_tag === 1 && "!"}
          {props.item.priority_tag === 2 && "!!"}
          {props.item.priority_tag === 3 && "!!!"}
        </h5>
      </Card>
    </Link>
  );
}
