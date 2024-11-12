import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";
import VenueCard from "./components/VenueCard";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <Nav />
      <Slider />
      <VenueCard />
      {/* <ItemBox /> */}
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
