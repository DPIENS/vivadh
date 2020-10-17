import React, { Component } from "react";
import "./App.css";
// import AppBuilder from "./container/AppBuilder";
// import Aux from "./hoc/Auxiliary"

import NavBar from "./components/NavBar/NavBar";
import ContentCard from "./components/ContentCard/ContentCard";

const App = () => {
  return (
    <div>
      <NavBar />
      <ContentCard />
    </div>
  );
};

export default App;
