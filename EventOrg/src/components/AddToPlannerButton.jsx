import React, { useState } from "react";

function AddToPlannerButton({ packageId, venueId, serviceId }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddToPlanner = async () => {
    const data = {};
    if (packageId) {
      data.package = packageId;
    }
    if (venueId) {
      data.venue = venueId;
    }
    if (serviceId) {
      data.service = serviceId;
    }
    data.booked_at = new Date().toISOString();

    // Add session ID for anonymous users if not authenticated
    const sessionId = localStorage.getItem("session_id"); // Assuming session_id is stored in localStorage
    if (!sessionId) {
      // Generate a session ID for the first time
      const newSessionId = `session_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("session_id", newSessionId);
      data.session_id = newSessionId;
    } else {
      data.session_id = sessionId;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/add_to_planner/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (response.ok) {
        alert("Item successfully added to planner.");
      } else {
        alert(`Failed to add item to planner: ${responseData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add item to planner. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={handleAddToPlanner}>Add to Planner</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>
          Item added successfully to your planner!
        </p>
      )}
    </div>
  );
}

export default AddToPlannerButton;
