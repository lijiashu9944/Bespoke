import React from "react";
import classes from "./Card.module.css";

const Card = (prop) => {
  return <div className={`${classes.card} ${prop.className}`}>{prop.children}</div>;
};
export default Card;
