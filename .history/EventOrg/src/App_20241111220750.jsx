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
          <Route path="/" element={<Slider />} />
          <Route path="/create-venue" element={<Create_Venue />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/filter-service" element={<Filter_service />} />
          <Route path="/venues" element={<ItemBox />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
