import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../module_css/ItemBox.module.css";
import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceBox() {
  return (
    <div>
      <div class="container">
        <img src="img_avatar.png" alt="Avatar" class="image" />
        <div class="overlay">
          My Name is John<br>MOre</br>
        </div>
      </div>
    </div>
  );
}
