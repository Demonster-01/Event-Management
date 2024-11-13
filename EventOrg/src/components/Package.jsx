import { useEffect, useState } from "react";
import styles from "../module_css/Package.module.css";
import axios from "axios";

export default function Package() {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/package/")
      .then((response) => setPackages(response.data))
      .catch((error) => {
        setError("Error fetching packages");
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* <div className={styles.bg}>
        <div className={styles.bgImage}></div>{" "}
      </div> */}
      <h1>Package</h1>
      {error && <p className={styles.error}>{error}</p>}
      {packages.length > 0 ? (
        packages.map((pkg) => (
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
              <p>{pkg.Description}</p>
              <p>Nrs.{pkg.Price}</p>
            </div>
            <div className={styles.btndiv}>
              <span>Add to planner</span>
              <button className={styles.btn}>
                <i class="bi bi-file-earmark-plus"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No packages available</p>
      )}
    </div>
  );
}
