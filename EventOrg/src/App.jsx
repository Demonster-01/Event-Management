import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Filter_service from "./components/Filter_service";
import ItemBox from "./components/ItemBox";
import Create_Venue from "./components/Create_Venue";
import Contact from "./components/Contact";
import VenueGallery from "./components/VenueGallery"; // Import VenueGallery component
import ServiceBox from "./components/ServiceBox";
import ServiceDetails from "./components/ServiceDetails";
import Service_gallery from "./components/Service_gallery";
import OurWork from "./components/OurWork";
import Footer from "./components/Footer";
import Package from "./components/Package";
import PlannerList from "./components/PlannerList";
import PackageCreate from "./components/PackageCreate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ItemBox />
                <ServiceBox />
                <OurWork />
                <Footer />
              </>
            }
          />
          <Route path="/venue-gallery" element={<VenueGallery />} />
          <Route path="/venues/create/" element={<Create_Venue />} />
          {/* <Route path="/service-detail/" element={<ServiceDetails />} /> */}

          <Route path="/service-detail/:id" element={<ServiceDetails />} />
          <Route path="/service-gallery/" element={<Service_gallery />} />
          <Route path="/package/" element={<Package />} />
          <Route path="/planner-list/" element={<PlannerList />} />
          <Route path="/create-package/" element={<PackageCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
