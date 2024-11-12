import { useState } from "react";
import styles from "../module_css/Filter_service.module.css";

export default function Filter_service() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);
  const [selectedTab, setSelectedTab] = useState("Venues");

  // Handle changes in range inputs
  const handleMinChange = (e) => setMinValue(e.target.value);
  const handleMaxChange = (e) => setMaxValue(e.target.value);

  // Handle tab selection
  const handleTabSelect = (tab) => setSelectedTab(tab);

  // Fetch data from Django REST API
  const handleSubmit = async () => {
    const apiUrl = `https://your-django-api-endpoint.com/${selectedTab.toLowerCase()}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); // Replace this with your desired data handling logic
  };

  return (
    <>
      <section className={styles.filter_section}>
        <div className={styles.tabs}>
          <div className={styles.tabOptions}>
            <button
              className={`${styles.tab} ${
                selectedTab === "Venues" ? styles.active : ""
              }`}
              onClick={() => handleTabSelect("Venues")}
            >
              Venues
            </button>
            <button
              className={`${styles.tab} ${
                selectedTab === "Services" ? styles.active : ""
              }`}
              onClick={() => handleTabSelect("Services")}
            >
              Services
            </button>
          </div>
          <div>Quick search</div>
        </div>
        <div className={styles.filters}>
          <div className={styles.range}>
            <label>Min Price: {minValue}</label>
            <input
              type="range"
              min="300"
              max="2800"
              value={minValue}
              onChange={handleMinChange}
            />
            <label>Max Price: {maxValue}</label>
            <input
              type="range"
              min="300"
              max="2800"
              value={maxValue}
              onChange={handleMaxChange}
            />
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search by event, name, address, etc."
            />
          </div>
          <button className={styles.filter_icon} onClick={handleSubmit}>
            Submit {selectedTab}
          </button>
        </div>
      </section>
    </>
  );
}
