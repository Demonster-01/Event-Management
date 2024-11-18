// src/components/PlannerItemComponent.jsx
import React from "react";
import styles from "../module_css/PlannerList.module.css";

const PlannerItemComponent = ({ item, type, onAdd, onRemove }) => {
  console.log(item); // Add this line to debug the `item` data

  return (
    <div className={styles.planner_card}>
      <img
        src={`http://127.0.0.1:8000${item.poster}`}
        alt={`${type} Poster`}
        className={styles.planner_image}
      />
      <div className={styles.planner_details}>
        <h3>{item.Name}</h3>
        {type === "venues" && (
          <>
            <p>Location: {item.Location}</p>
            <p>Booking Price: ${item.Booking_price}</p>
            <p>Capacity: {item.Capacity}</p>
            <p>Parking: {item.Parking ? "Yes" : "No"}</p>
          </>
        )}
        {type === "services" && (
          <>
            <p>Type: {item.Type}</p>
            <p>Description: {item.Description}</p>
            <p>Price: ${item.Price}</p>
          </>
        )}
        {type === "packages" && (
          <>
            <p>Type: {item.Type}</p>
            <p>Description: {item.Description}</p>
            <p>Price: ${item.Price}</p>
          </>
        )}
        <div className={styles.btndiv}>
          <button
            className={styles.btn}
            onClick={() => onRemove(item.id, type)}
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
          <button className={styles.btn} onClick={() => onAdd(item, type)}>
            Add to Planner
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlannerItemComponent;
