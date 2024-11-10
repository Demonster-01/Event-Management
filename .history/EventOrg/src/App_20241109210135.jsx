import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <ItemBox />
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
