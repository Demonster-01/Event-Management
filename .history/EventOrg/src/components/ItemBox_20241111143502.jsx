import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../module_css/ItemBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ItemBox() {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);

  // Fetch venue data when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/venues/") // Your API endpoint here
      .then((response) => {
        setVenues(response.data); // Update state with fetched venues
      })
      .catch((error) => {
        setError("Error fetching venues");
        console.error(error);
      });
  }, []);

  return (
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
              <h3>{venue.Name}</h3>
              <button className={styles.btn} disabled>
                Starting at ${venue.booking_price}
              </button>
            </div>
            <div className={styles.description}>
              <div>
                <span>{venue.no_of_halls} Halls</span>
                <span>{venue.area} sq.ft</span>
                <span>{venue.capacity} capacity</span>
              </div>
              <button className={styles.btn}>Book Now</button>
            </div>
          </div>
        ))
      ) : (
        <p>No venues available</p>
      )}
    </div>
  );
}
