import React from "react";
import styles from "../module_css/VenueCard.module.css";
import "../module_css/VenueCard.css"; // Import your CSS file for styling

import hallImage from "../assets/images/hall.jpg";
function VenueCard({ venueData }) {
  const { name, image, startingPrice, halls, sqFt, capacity, bookingLink } =
    venueData;

  return (
    <div className="venue-card">
      <img src={hallImage} alt="hall" className="venue-image" />
      <div className="venue-details">
        <h2>{name}</h2>
        <p className="price">Starting at NPR {startingPrice}</p>
        <div className="venue-stats">
          <div>
            <p>{halls} Halls</p>
            <p>{sqFt} Sq Ft</p>
          </div>
          <div>
            <p>{capacity} Capacity</p>
            <button className="book-button">
              Book Now <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueCard;
