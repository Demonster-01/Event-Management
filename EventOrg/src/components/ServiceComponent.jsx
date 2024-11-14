import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../module_css/ServiceComponent.module.css";
import hallImage from "../assets/images/hall.jpg";

import AddToPlannerButton from "./AddToPlannerButton";

export default function ServiceComponent({ id }) {
  const [service, setService] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/service/${id}/`)
        .then((response) => {
          setService(response.data);
        })
        .catch((error) => {
          console.error("Error fetching service details:", error);
        });
    }
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.serviceInfo}>
      <div className={styles.Image}>
        <img
          src={
            service.poster
              ? `http://127.0.0.1:8000${service.poster}`
              : hallImage
          }
          alt="service"
          style={{
            width: "100%",
            maxWidth: "700px", // Example maximum width
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <div className={styles.details}>
          <h1>Service Details</h1>
          <h3>{service.Name}</h3>
          <ul>
            <li>Type: {service.Type}</li>
            <li>Price: ${service.Price}</li>
          </ul>
        </div>
        <div className={styles.description}>{service.Description}</div>
      </div>

      <AddToPlannerButton packageId={service.id} itemType="service" />
    </div>
  );
}
