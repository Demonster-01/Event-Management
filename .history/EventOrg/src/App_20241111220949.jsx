import { useState } from "react";

import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";

import Create_Venue from "./components/Create_Venue";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/create-venue" element={<Create_Venue />} />
        </Routes>
        <Slider />
        <ItemBox />
      </div>
    </Router>
  );
}

export default App;
