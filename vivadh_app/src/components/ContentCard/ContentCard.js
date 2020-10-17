import React from "react";
import classes from "./ContentCard.css";
import "./ContentCard.css";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from './CardBody/CardBody'

const ContentCard = (props) => {
  return (
    <div className={classes.ContentCardBody}>
      <CardHeader isFav={props.isFav} set={props.set}/>
      <h3 className={classes.header}>what are the most profitable business in India ?</h3>
      <CardBody className={classes.CardBodya}/>
    </div>
  );
};

export default ContentCard;
