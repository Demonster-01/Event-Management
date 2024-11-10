import React from "react";
import "../module_css/VenuCard.css"; // Import your CSS file for styling

import hallImage from "../assets/images/hall.jpg";
function VenueCard() {
  return (
    <div className="venue-card">
      <img src={hallImage} alt="hall" className="venue-image" />
      <div className="venue-details">
        <h2>Ktm Party palace </h2>
        <span className="price">Starting at NPR 100</span>
      </div>
      <div className="venue-footer">
        <div className="venue-stats">
          <div className="stats">2 Halls</div>
          <div className="stats">100 Sq Ft</div>
          <div className="stats">500 Capacity</div>
          <ul>
            <li>2 halls</li>
            <li>100 sq ft</li>
          </ul>
        </div>
        <button className="book-button">
          Book Now <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default VenueCard;