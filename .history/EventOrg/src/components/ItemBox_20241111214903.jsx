import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../module_css/ItemBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ItemBox({ limit = 3 }) {
  // Default to 3 if not provided
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);

  // Fetch venue data when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/venues/")
      .then((response) => {
        setVenues(response.data); // Store all venues
      })
      .catch((error) => {
        setError("Error fetching venues");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className={styles.Venue_nav}>
        <h1>Venue</h1>
        <a href="#">More Venue...</a>
      </div>
      <div className={styles.container}>
        {error && <p className="text-danger">{error}</p>}
        {venues.length > 0 ? (
          venues.slice(0, limit).map(
            (
              venue // Use the limit here
            ) => (
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

                      <li>
                        {venue.Parking === true && <li>Parking Available</li>}
                      </li>
                    </ul>
                  </div>
                  <button className={styles.btn}>Book Now</button>
                </div>
              </div>
            )
          )
        ) : (
          <p>No venues available</p>
        )}
      </div>
    </div>
  );
}
