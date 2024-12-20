import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image
import { Link } from "react-router-dom";

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
        setError("Error fetching Services");
        console.error(error);
      });
  }, [showAllServices]);

  return (
    <div className={styles.serviceContainer}>
      <hr />
      <div className={styles.Service_nav}>
        <h1>Our Services</h1>
        {!showAllServices && <Link to="/service-gallery">More Service...</Link>}
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {services.length > 0 ? (
        <div className={styles.container}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceItem}>
              <img
                src={
                  service.poster
                    ? `http://127.0.0.1:8000${service.poster}`
                    : hallImage
                }
                alt={service.Name}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>
                  {service.Type}-{service.Name}
                </span>
                <p>
                  {service.keywords}
                  <br />
                  <Link to={`/service-detail/${service.id}`}>More ...</Link>
                </p>
              </div>
              <span className={styles.serviceName}>{service.Name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No Service Available</p>
      )}

      <hr />
    </div>
  );
}
