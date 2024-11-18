import React, { useEffect, useState } from "react";
import axios from "axios";
import PlannerItemComponent from "./PlannerItemComponent"; // Import your PlannerItem component
import styles from "../module_css/PlannerList.module.css";

export default function PlannerList() {
  const [planners, setPlanners] = useState({
    venues: [],
    services: [],
    packages: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showVenues, setShowVenues] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Effect hook to determine if the user is authenticated and load data
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      setIsAuthenticated(true);
      fetchPlannerDataFromBackend(token); // Fetch from backend if user is logged in
    } else {
      loadPlannerDataFromLocalStorage(); // Use localStorage if user is not logged in
    }
  }, []);

  // Fetch planner data from backend if the user is authenticated
  const fetchPlannerDataFromBackend = (token) => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/planner-list/", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      })
      .then((response) => {
        setPlanners({
          venues: response.data.venues,
          services: response.data.services,
          packages: response.data.packages,
        });
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching planner data");
        console.error(error);
        setLoading(false);
      });
  };

  // Load planner data from localStorage if the user is not authenticated
  const loadPlannerDataFromLocalStorage = () => {
    const storedPlanners = JSON.parse(localStorage.getItem("plannerList")) || {
      venues: [],
      services: [],
      packages: [],
    };
    setPlanners(storedPlanners);
  };

  const addToPlanner = (item, type) => {
    let updatedPlanners = { ...planners };
    updatedPlanners[type].push(item);

    setPlanners(updatedPlanners);
    localStorage.setItem("plannerList", JSON.stringify(updatedPlanners));

    if (isAuthenticated) {
      const token = localStorage.getItem("access_token");
      axios.post(
        "http://127.0.0.1:8000/api/planner-list/",
        { venue: item.id, service: item.id, package: item.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
  };

  const removeFromPlanner = (itemId, type) => {
    const updatedPlanners = { ...planners };
    updatedPlanners[type] = updatedPlanners[type].filter(
      (item) => item.id !== itemId
    );

    setPlanners(updatedPlanners);
    localStorage.setItem("plannerList", JSON.stringify(updatedPlanners));

    if (isAuthenticated) {
      const token = localStorage.getItem("access_token");
      axios.delete(`http://127.0.0.1:8000/api/planner-list/${itemId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  };

  const { venues, services, packages } = planners;
  const totalItems = venues.length + services.length + packages.length;

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
                  <PlannerItemComponent
                    key={venueItem.id}
                    item={venueItem}
                    type="venues"
                    onAdd={addToPlanner}
                    onRemove={removeFromPlanner}
                  />
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
                  <PlannerItemComponent
                    key={serviceItem.id}
                    item={serviceItem}
                    type="services"
                    onAdd={addToPlanner}
                    onRemove={removeFromPlanner}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Package Section */}
          <div className={styles.section}>
            <div
              className={styles.section_header}
              onClick={() => setShowPackages(!showPackages)}
            >
              <h2>Packages</h2>
              <span className={styles.item_count}>({packages.length})</span>
            </div>
            {showPackages && (
              <div className={styles.section_content}>
                {packages.map((packageItem) => (
                  <PlannerItemComponent
                    key={packageItem.id}
                    item={packageItem}
                    type="packages"
                    onAdd={addToPlanner}
                    onRemove={removeFromPlanner}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
