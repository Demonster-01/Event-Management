import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox() {
  return (
    <div>
      <div className="container">
        <img src={hallImage} alt="Avatar" className="image" />
        <div className="overlay">My Name is John</div>
      </div>
    </div>
  );
}
