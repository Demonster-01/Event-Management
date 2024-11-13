import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../module_css/PlannerList.module.css";

export default function PlannerList() {
  const [planners, setPlanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showVenues, setShowVenues] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/planner-list/")
      .then((response) => {
        console.log(response.data); // Inspect response data here
        setPlanners(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching planner data");
        console.error(error);
        setLoading(false);
      });
  }, []);

  const venues = planners.filter((item) => item.venue);
  const services = planners.filter((item) => item.service);
  const totalItems = venues.length + services.length;

  return (
    <div className={styles.planner_list_container}>
      <h1>Planner List</h1>
      <p>Total Items: {totalItems}</p>
      {error && <p className={styles.errormessage}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Venue Section */}
          <div className={styles.section}>
            <div
              className={styles.section_header}
              onClick={() => setShowVenues(!showVenues)}
            >
              <h2>Venues</h2>
              <span className={styles.item_count}>({venues.length})</span>
            </div>
            {showVenues && (
              <div className={styles.section_content}>
                {venues.map((venueItem) => (
                  <div key={venueItem.id} className={styles.planner_card}>
                    <img
                      src={`http://127.0.0.1:8000${venueItem.venue.Poster}`}
                      alt="Venue Poster"
                      className={styles.planner_image}
                    />
                    <div className={styles.planner_details}>
                      <h3>{venueItem.venue.Name}</h3>
                      <p>Location: {venueItem.venue.Location}</p>
                      <p>Booking Price: ${venueItem.venue.Booking_price}</p>
                      <p>Capacity: {venueItem.venue.Capacity}</p>
                      <p>Parking: {venueItem.venue.Parking ? "Yes" : "No"}</p>
                      <div className={styles.btndiv}>
                        <button className={styles.btn}>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Section */}
          <div className={styles.section}>
            <div
              className={styles.section_header}
              onClick={() => setShowServices(!showServices)}
            >
              <h2>Services</h2>
              <span className={styles.item_count}>({services.length})</span>
            </div>
            {showServices && (
              <div className={styles.section_content}>
                {services.map((serviceItem) => (
                  <div key={serviceItem.id} className={styles.planner_card}>
                    <img
                      src={`http://127.0.0.1:8000${serviceItem.service.poster}`}
                      alt="Service Poster"
                      className={styles.planner_image}
                    />
                    <div className={styles.planner_details}>
                      <h3>{serviceItem.service.Name}</h3>
                      <p>Type: {serviceItem.service.Type}</p>
                      <p>Description: {serviceItem.service.Description}</p>
                      <p>Price: ${serviceItem.service.Price}</p>
                      <div className={styles.btndiv}>
                        <button className={styles.btn}>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
