import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox({ showAllServices = false }) {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  // Fetch service data when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((response) => {
        setServices(
          showAllServices ? response.data : response.data.slice(0, 3)
        );
      })
      .catch((error) => {
        setError("Error fetching services");
        console.error(error);
      });
  }, [showAllServices]);

  return (
    <div>
      <h2>Our Services</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceBox}>
            <div className={styles.imageContainer}>
              <img
                src={service.poster || hallImage}
                alt={service.Name}
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <h3>{service.Name}</h3>
              <p>{service.Description}</p>
              <div className={styles.info}>
                <span>{service.No_of_Halls} Halls</span>
                <span>{service.Area} sq.ft</span>
                <span>{service.Capacity} capacity</span>
                {service.Parking === "Yes" && <span>Parking Available</span>}
              </div>
              <Link to={`/service/${service.id}`} className={styles.btn}>
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
