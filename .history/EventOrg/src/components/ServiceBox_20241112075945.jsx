import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ServiceBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox() {
  return (
    <div>
      <div class="container">
        <img src={hallImage} alt="Avatar" class="image" />
        <div class="overlay">My Name is John</div>
      </div>
    </div>
  );
}
