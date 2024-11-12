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
    <div className="App">
      {/* <Create_Venue /> */}
      <Nav />
      <Slider />
      <ItemBox />
      {/* <Contact /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/venues/create/" element={<Create_Venue />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
