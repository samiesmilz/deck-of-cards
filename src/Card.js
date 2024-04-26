import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="Card">
      <img className="Card-img" src={data} alt="" />
    </div>
  );
};

export default Card;
