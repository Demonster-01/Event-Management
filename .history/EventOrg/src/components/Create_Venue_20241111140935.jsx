import { useState } from "react";

import styles from "../module_css/CreateVenue.module.css";

export default function Create_Venue() {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [No_of_Halls, setNo_of_Halls] = useState("");
  const [Area, setArea] = useState("");
  const [Parking, setParking] = useState(false);
  const [Booking_price, setBooking_price] = useState("");
  const [Poster, setPoster] = useState(null);
  const [error, setError] = useState("");

  const handleParkingChange = (e) => {
    setParking(e.target.value); // Set the selected parking option
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data to send to the API
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Location", Location);
    formData.append("Capacity", Capacity);
    formData.append("No_of_Halls", No_of_Halls);
    formData.append("Area", Area);
    formData.append("Parking", Parking);
    formData.append("Booking_price", Booking_price);
    if (Poster) {
      formData.append("Poster", Poster);
    }

    fetch("http://127.0.0.1:8000/api/venues/create/", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        // 'Content-Type': 'multipart/form-data', Don't set Content-Type when using FormData, browser handles it
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          alert("Venue created successfully!");
          setName("");
          setLocation("");
          setCapacity("");
          setNo_of_Halls("");
          setArea("");
          setParking(false);
          setBooking_price("");
          setPoster(null);
        } else {
          setError("Error creating venue");
        }
      })
      .catch((error) => setError("Error creating venue"));
  };

  return (
    <div className={styles.formGroup}>
      <h2>Create New Venue</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            className={styles.inputField}
            id="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className={styles.formLabel}>
            Location
          </label>
          <input
            type="text"
            className={styles.inputField}
            id="location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="capacity" className={styles.formLabel}>
            Capacity
          </label>
          <input
            type="number"
            className={styles.inputField}
            id="capacity"
            value={Capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="no_of_Halls" className={styles.formLabel}>
            No_of_Halls
          </label>
          <input
            type="number"
            className={styles.inputField}
            id="no_of_Halls"
            value={No_of_Halls}
            onChange={(e) => setNo_of_Halls(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className={styles.formLabel}>
            Area
          </label>
          <input
            type="number"
            className={styles.inputField}
            id="area"
            value={Area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="parking" className={styles.formLabel}>
            Parking
          </label>

          {/* Radio buttons for Parking */}
          <div className={styles.radioGroup}>
            <div>
              <input
                type="radio"
                id="parkingYes"
                name="parking"
                value="Yes"
                className={styles.inputField}
                checked={Parking === "Yes"}
                onChange={handleParkingChange}
              />
              <label htmlFor="parkingYes" className={styles.formLabel}>
                Yes
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="parkingNo"
                name="parking"
                value="No"
                className={styles.inputField}
                checked={Parking === "No"}
                onChange={handleParkingChange}
              />
              <label htmlFor="parkingNo" className={styles.formLabel}>
                No
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="booking_price" className={styles.formLabel}>
            Booking_price
          </label>
          <input
            type="number"
            className={styles.inputField}
            id="booking_price"
            value={Booking_price}
            onChange={(e) => setBooking_price(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="poster" className={styles.formLabel}>
            Poster Image
          </label>
          <input
            type="file"
            className={styles.inputField}
            id="poster"
            onChange={(e) => setPoster(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn center btn-primary">
          Create Venue
        </button>
      </form>
    </div>
  );
}
