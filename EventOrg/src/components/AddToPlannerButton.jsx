import React, { useState } from "react";

function AddToPlannerButton({ packageId, venueId, serviceId }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToPlanner = async () => {
    setError("");
    setSuccess(false);
    setLoading(true);

    const accessToken = localStorage.getItem("authToken");

    const data = {
      package: packageId || null,
      venue: venueId || null,
      service: serviceId || null,
      booked_at: new Date().toISOString(),
    };

    console.log("Data to send:", data); // Log data for debugging

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/add_to_planner/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log("Item added to planner:", responseData);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Error adding item to planner:", errorData);
        setError(errorData.error || "Failed to add item to planner.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToPlanner}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "gray" : "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Adding..." : "Add to Planner"}
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Item added successfully to your planner!
        </p>
      )}
    </div>
  );
}

export default AddToPlannerButton;
