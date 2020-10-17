import React from "react";
import Avatar from "@material-ui/core/Avatar";
import classes from "./CardHeader.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const CardHeader = (props) => {

  return (
    <div className={classes.CardHeader}>
      <Avatar />
      <a className={classes.UserName}>@Akash Nadadur</a>
      <p className={classes.PostedAnOpinion}>posted an opinion</p>
      <p className={classes.PostedAgo}> 2h ago </p>
      <a
        onClick={() => props.set(!props.isFav)}
      >
        {props.isFav ? (
          <StarIcon className={classes.StarIcon} />
        ) : (
          <StarBorderIcon className={classes.StarBorderIcon} />
        )}
      </a>
      <MoreHorizIcon className={classes.MoreHorizon} />
    </div>
  );
};

export default CardHeader;
