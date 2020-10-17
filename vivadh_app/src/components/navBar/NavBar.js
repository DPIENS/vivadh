import React from "react";
import classes from "./NavBar.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="vivadh" href="#">
          Vivadh
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end  my-1"
          id="navbarSupportedContent"
        >
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              id="form-rounded"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}
          </form>
        </div>
        <div className="bellIcon">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="28.555" height="31.5" viewBox="0 0 28.555 31.5"><defs><style>.a"fill:grey;stroke:#b1b1b1;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;"</style></defs><g transform="translate(-2 -1)"><path class="a" d="M25.129,10.852a8.852,8.852,0,1,0-17.7,0C7.426,21.178,3,24.129,3,24.129H29.555s-4.426-2.951-4.426-13.277"/><path class="a" d="M15.374,21a2.951,2.951,0,0,1-5.1,0" transform="translate(3.455 9.03)"/></g></svg> */}
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-bell"
            fill="grey"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"
              fill="grey"
              stroke="silver"
            />
            <path
              fill="grey"
              d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
            />
          </svg>
        </div>
        <div className={classes.root}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
