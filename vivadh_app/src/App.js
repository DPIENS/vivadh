import React, { Component,useState } from "react";
import "./App.css";
// import AppBuilder from "./container/AppBuilder";
// import Aux from "./hoc/Auxiliary"
import classes from "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ContentCard from "./components/ContentCard/ContentCard";

const App = () => {
  const [isFav,setIsFav] = useState(false)
  return (
    <div className={classes.body}>
      <NavBar />
      <ContentCard  isFav={isFav} set={setIsFav}/>
    </div>
  );
};

export default App;
