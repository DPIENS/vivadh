import React, { Component,useState, useEffect } from "react";
import "./App.css";
// import AppBuilder from "./container/AppBuilder";
// import Aux from "./hoc/Auxiliary"
import classes from "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ContentCard from "./components/ContentCard/ContentCard";

const App = () => {
  const [isFav,setIsFav] = useState(false)
  const [para, setPara] = useState('')

  useEffect(() => {
    setPara(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
  }, [])
  return (
    <div className={classes.body}>
      <NavBar />
      <ContentCard  isFav={isFav} set={setIsFav} para={para}/>
    </div>
  );
};

export default App;
