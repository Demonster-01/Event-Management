import { useEffect, useState } from "react";
import styles from "../module_css/Package.module.css";
import axios from "axios";
import AddToPlannerButton from "./AddToPlannerButton";

export default function Package() {
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all services first
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        setError("Error fetching services");
        console.error(error);
      });

    // Then fetch packages
    axios
      .get("http://127.0.0.1:8000/api/package/")
      .then((response) => {
        console.log(response.data);
        setPackages(response.data);
      })
      .catch((error) => {
        setError("Error fetching packages");
        console.error(error);
      });
  }, []);

  // Function to get the service name by its ID
  const getServiceNameById = (id) => {
    const service = services.find((service) => service.id === id);
    return service ? service.Name : "Unknown Service";
  };

  return (
    <div className={styles.container}>
      <h1>Packages</h1>
      {error && <p className={styles.error}>{error}</p>}

      {packages.length > 0 ? (
        <div className={styles.packageGrid}>
          {packages.map((pkg) => (
            <div key={pkg.id} className={styles.package}>
              <div className={styles.picdiv}>
                <img
                  alt="Package"
                  src={`http://127.0.0.1:8000${pkg.poster}`}
                  className={styles.pics}
                />
              </div>
              <div className={styles.details}>
                <p>{pkg.Name}</p>
                <p>Description: {pkg.Description}</p>
                {/* Render the service names using service IDs */}
                <ul>
                  {pkg.services.map((serviceId) => (
                    <li key={serviceId}>{getServiceNameById(serviceId)}</li>
                  ))}
                </ul>
                <p>Nrs. {pkg.Price}</p>
              </div>
              <div className={styles.btndiv}>
                <span>Add to planner</span>
                <p> {pkg.id}</p>
                <AddToPlannerButton packageId={pkg.id} itemType="package" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No packages available</p>
      )}
    </div>
  );
}
