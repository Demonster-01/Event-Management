import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";
import VenueCard from "./components/VenueCard";

import Create_Venue from "./components/Create_Venue";

function App() {
  return (
    <div className="App">
      <Create_Venue />
      {/* <Nav />
      <Slider />
      <VenueCard /> */}
      {/* <ItemBox /> */}
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
