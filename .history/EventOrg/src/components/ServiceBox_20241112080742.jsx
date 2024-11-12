import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox({ showAllServices = false }) {
  const [Service, setServices] = useState([]);
  const [error, setError] = useState(null);
  // Fetch venue data when the component is mounted
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((response) => {
        setVenues(showAllServices ? response.data : response.data.slice(0, 3));
      })
      .catch((error) => {
        setError("Error fetching venues");
        console.error(error);
      });
  }, [showAllServices]);
  return (
    <div>
      Our Services
      <div className={styles.container}>
        <img
          src={Service.poster || hallImage}
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}>My Name is John</div>
      </div>
    </div>
  );
}