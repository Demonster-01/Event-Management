import React, { useState } from "react";
import axios from "axios";
import styles from "../module_css/AddToPlannerButton.module.css";

export default function AddToPlannerButton({
  venueId = null,
  serviceId = null,
  packageId = null,
  itemType = null,
}) {
  console.log(itemType, packageId);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAddToPlanner = async () => {
    setLoading(true);
    setMessage("");
    try {
      console.log("btn was clicked ready to post", itemType, packageId);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/add_to_planner/",
        {
          item_type: itemType, // 'package', 'venue', or 'service'
          item_id: packageId || venueId || serviceId, // Pass the appropriate ID
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error adding to planner");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <button
          className={styles.btn}
          onClick={handleAddToPlanner}
          disabled={loading}
        >
          {loading ? "Adding..." : <i className="bi bi-file-earmark-plus"></i>}
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
