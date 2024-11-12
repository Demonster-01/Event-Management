import React, { useState } from "react";
import ReactSlider from "react-slider";
import styles from "../module_css/Filter_service.module.css";

export default function Filter_service() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);
  const [selectedTab, setSelectedTab] = useState("Venues");

  // Handle changes in dual range input
  const handleRangeChange = ([newMin, newMax]) => {
    setMinValue(newMin);
    setMaxValue(newMax);
  };

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
            <ReactSlider
              className={styles.rangeSlider}
              min={300}
              max={2800}
              value={[minValue, maxValue]}
              onChange={handleRangeChange}
              pearling
              minDistance={10}
              renderThumb={(props, state) => (
                <div {...props} className={styles.thumb}></div>
              )}
            />

            <label>Max Price: {maxValue}</label>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search by event, name, address, etc."
            />
          </div>
          <button className={styles.btn} onClick={handleSubmit}>
            Submit {selectedTab}
          </button>
        </div>
      </section>
    </>
  );
}
