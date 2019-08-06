import React from "react";
import "./style.css";

function FruitCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id, props.name)}>
        <img src={props.image} />
    </div>
  );
}

export default FruitCard;
