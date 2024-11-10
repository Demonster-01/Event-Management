import React from "react";

function EventPlanner() {
  return (
    <div className="event-planner">
      <div className="hero-section">
        <h1>BOOK YOUR EVENTS</h1>
        <p>Your personal event planner in your pocket</p>
        <button>Plan Your Event in Ten Minutes</button>

        <div style={{ backgroundImage: "url(./assets/images/image.jpg)" }}>
          {/* Background image goes here */}/
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-item">
          <label>Venues</label>
        </div>
        <div className="filter-item">
          <label>Decorations</label>
        </div>
        <div className="filter-item">
          <label>Services</label>
        </div>

        <div className="price-range">
          <label>Min Price: NPR 300</label>
          <input type="range" min="300" max="2800" />
          <label>Max Price: NPR 2,800</label>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by event name, address, etc."
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default EventPlanner;
