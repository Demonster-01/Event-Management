import { useState } from "react";

export default function Create_Venue() {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [No_of_Halls, setNo_of_Halls] = useState("");
  const [Area, setArea] = useState("");
  const [Parking, setParking] = useState(false);
  const [Booking_price, setBooking_price] = useState("");
  const [Poster, setPoster] = useState(Null);
  const [error, setError] = useState("");

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
    <div className="container">
      <h2>Create New Venue</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">
            Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            value={Capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="poster" className="form-label">
            Poster Image
          </label>
          <input
            type="file"
            className="form-control"
            id="poster"
            onChange={(e) => setPoster(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Venue
        </button>
      </form>
    </div>
  );
}
