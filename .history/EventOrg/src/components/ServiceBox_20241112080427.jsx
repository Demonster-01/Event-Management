import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox() {
  const [Service, setServices] = useState([]);
  const [error, setError] = useState(null);
  return (
    <div>
      Our Services
      <div className={styles.container}>
        <img src={hallImage} alt="Avatar" className={styles.image} />
        <div className={styles.overlay}>My Name is John</div>
      </div>
    </div>
  );
}
