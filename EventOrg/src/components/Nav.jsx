import React from "react";
import styles from "../module_css/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  // Check if the user is logged in by looking for the JWT token in localStorage
  const authToken = localStorage.getItem("authToken");

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>Explore</li>
            <li className={styles.nav_item}>
              <Link className={styles.links} to="/package">
                Package
              </Link>
            </li>
            <li className={styles.nav_item}>Custom Booking</li>
            <li className={styles.nav_item}>Contact</li>
          </ul>
        </nav>

        <div className={styles.logo}>
          <Link to={`/`}>Logo</Link>
        </div>

        <div className={styles.btngroup}>
          <button className={styles.btn}>
            <Link className={styles.links} to="/planner-list">
              Planner
            </Link>
          </button>

          {/* Conditionally render login button or JWT token */}
          {authToken ? (
            <button className={styles.btn}>
              {/* Display JWT token or a custom message */}
              <span className={styles.links}>Logged in-</span>
              {/* Or display JWT token directly */}
              <span className={styles.links}>{authToken}</span>
            </button>
          ) : (
            <button className={styles.btn}>
              <Link className={styles.links} to="/login">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
