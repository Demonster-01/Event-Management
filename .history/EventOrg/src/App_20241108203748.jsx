import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <Filter />

      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
