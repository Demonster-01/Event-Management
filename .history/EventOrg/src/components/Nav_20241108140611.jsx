import React from "react";
import styles from "./module_css/Nav";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Explore</li>
        <li className="nav-item">Package</li>
        <li className="nav-item">Custom Booking</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}
