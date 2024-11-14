import React, { useState, useEffect } from "react";
import styles from "../module_css/PackageCreate.module.css";
import axios from "axios";

export default function PackageCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const [price, setPrice] = useState(1000);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    setPoster(file);
    setPosterPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", description);
    formData.append("poster", poster);
    formData.append("Price", price);

    // Check the selected services before appending
    console.log("Selected Services:", selectedServices);

    // Ensure selectedServices is being sent correctly
    selectedServices.forEach((serviceId) => {
      formData.append("services[]", serviceId); // Sending the service IDs as an array
    });

    // Log formData to verify the data being sent
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/package-create/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessMessage("Package successfully created!");
      setErrorMessage(""); // Clear any previous error messages
      console.log("Package created:", response.data);
    } catch (error) {
      setErrorMessage(
        "Error creating package: " +
          (error.response ? error.response.data : error.message)
      );
      setSuccessMessage(""); // Clear any previous success messages
      console.error("Error creating package:", error);
    }
  };

  const handleServiceAdd = (serviceId) => {
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices((prev) => [...prev, serviceId]); // Add service only if not already selected
    }
  };

  const handleServiceRemove = (serviceId) => {
    setSelectedServices((prev) => prev.filter((id) => id !== serviceId)); // Remove service from selected list
  };

  const filteredServices = services.filter((service) =>
    service.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.header}>
          <section>
            <label htmlFor="name">Package Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </section>

          <section className={styles.imgfield}>
            <label htmlFor="poster">Poster</label>
            <input
              type="file"
              id="poster"
              onChange={handlePosterChange}
              required
            />
            {posterPreview && (
              <img
                src={posterPreview}
                alt="Preview"
                className={styles.imagePreview}
              />
            )}
          </section>
        </div>

        <div className={styles.dropdownContainer}>
          <section className={styles.serviceList}>
            <h4>Available Services</h4>
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <ul>
              {filteredServices.map((service) => (
                <li key={service.id} className={styles.serviceItem}>
                  <span>{service.Name}</span>
                  <button
                    type="button"
                    onClick={() => handleServiceAdd(service.id)}
                    className={styles.addButton}
                  >
                    +
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.selectedServicesBox}>
            <h4>Selected Services</h4>
            <ul>
              {selectedServices.map((serviceId) => {
                const service = services.find(
                  (s) => s.id === parseInt(serviceId)
                );
                return (
                  <li key={serviceId}>
                    <span>{service ? service.Name : "Unknown Service"}</span>
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(serviceId)}
                      className={styles.removeButton}
                    >
                      -
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className={styles.header}>
          <section>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="price">Package Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="10"
            />
          </section>
        </div>

        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>

      <div className={styles.messageContainer}>
        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
}
