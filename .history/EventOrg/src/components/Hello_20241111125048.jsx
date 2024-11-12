// Hello.jsx
import React, { useEffect, useState } from "react";

const Hello = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Fetch the venue data from Django API
    fetch("http://127.0.0.1:8000/api/venues/")
      .then((response) => response.json())
      .then((data) => setVenues(data))
      .catch((error) => console.error("Error fetching venue data:", error));
  }, []);

  return (
    <div>
      <h1>Venue List</h1>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>
            <h2>{venue.Name}</h2>
            <p>Location: {venue.Location}</p>
            <p>Capacity: {venue.Capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hello;
