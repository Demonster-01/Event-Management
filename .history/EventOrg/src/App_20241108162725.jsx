import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import SlideImage from "./components/SlideImage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <SlideImage />
      <h1>k</h1>
    </div>
  );
}

export default App;
