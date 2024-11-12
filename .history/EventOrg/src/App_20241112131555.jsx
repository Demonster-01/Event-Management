import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Slideshow from "./components/Slideshow";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";
import Create_Venue from "./components/Create_Venue";
import Contact from "./components/Contact";
import VenueGallery from "./components/VenueGallery"; // Import VenueGallery component
import ServiceBox from "./components/ServiceBox";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Slider />
                <ItemBox />
                <ServiceBox />
              </>
            }
          />
          <Route path="/venue-gallery" element={<VenueGallery />} />
          <Route path="/venues/create/" element={<Create_Venue />} />
          <Route path="/service/detail/" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
