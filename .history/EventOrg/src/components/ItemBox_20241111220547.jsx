import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../module_css/ItemBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

import { Link } from "react-router-dom";

export default function ItemBox() {
  const [venues, setVenues] = useState([]);
  const [allVenues, setAllVenues] = useState([]); // To hold all venues
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // Flag to determine whether to show all venues or just the first 3

  // Fetch venue data when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/venues/")
      .then((response) => {
        setAllVenues(response.data); // Save all venues
        setVenues(response.data.slice(0, 3)); // Initially show only the first 3 venues
      })
      .catch((error) => {
        setError("Error fetching venues");
        console.error(error);
      });
  }, []);

  // Toggle between showing all venues or just the first 3
  const handleShowAll = () => {
    setShowAll(!showAll);
    setVenues(showAll ? allVenues.slice(0, 3) : allVenues); // Toggle between the first 3 and all venues
  };

  return (
    <div>
      <div className={styles.Venue_nav}>
        <h1>Venue</h1>
        <a href="#" onClick={handleShowAll}>
          {showAll ? "Show Less" : "More Venue..."}
        </a>
        {/* <Link to="/venue-gallery">More Venue...</Link> */}
      </div>
      <div className={styles.container}>
        {error && <p className="text-danger">{error}</p>}
        {venues.length > 0 ? (
          venues.map((venue) => (
            <div key={venue.id} className={styles.itembox}>
              <div className={styles.imageContainer}>
                <img
                  src={venue.poster || hallImage} // Use venue's image or fallback to hallImage
                  alt={venue.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>{venue.Name}</h4>
                <span>NRs {venue.Booking_price} *</span>
              </div>
              <div className={styles.description}>
                <div className={styles.details}>
                  <ul className={styles.detailsList}>
                    <li>{venue.No_of_Halls} Halls</li>
                    <li>{venue.Area} sq.ft</li>
                    <li>{venue.Capacity} capacity</li>

                    {venue.Parking === true && <li>Parking Available</li>}
                  </ul>
                </div>
                <button className={styles.btn}>Book Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No venues available</p>
        )}
      </div>
    </div>
  );
}
