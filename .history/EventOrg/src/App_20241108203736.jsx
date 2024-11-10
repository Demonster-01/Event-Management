import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />

      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
