import React from "react";
import "../module_css/VenuCard.css"; // Import your CSS file for styling

import hallImage from "../assets/images/hall.jpg";
function VenueCard() {
  return (
    <div className="venue-card">
      <img src={hallImage} alt="hall" className="venue-image" />
      <div className="venue-details">
        <h2>Ktm Party palace </h2>
        <div className="price">
          <span>Starting at NPR 100</span>
        </div>
      </div>
      <div className="venue-stats">
        <div>
          <p>2 Halls</p>
          <p>100 Sq Ft</p>
        </div>
        <div>
          <p>500 Capacity</p>
          <button className="book-button">
            Book Now <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VenueCard;