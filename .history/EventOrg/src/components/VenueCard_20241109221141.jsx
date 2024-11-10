import React from "react";
import "./VenueCard.css"; // Import your CSS file for styling

function VenueCard({ venueData }) {
  const { name, image, startingPrice, halls, sqFt, capacity, bookingLink } =
    venueData;

  return (
    <div className="venue-card">
      <img src={image} alt={name} className="venue-image" />
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
