import React, { useState, useEffect } from "react";
import styles from "../module_css/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

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
            <Link className={styles.links} to="#">
              Planner
            </Link>
          </button>

          {/* Conditionally render login or logout based on authentication */}
          {isAuthenticated ? (
            <button className={styles.btn} onClick={handleLogout}>
              <span className={styles.links}>Logged in</span>
              <span className={styles.links}>
                <button className={styles.logoutBtn}>Logout</button>
              </span>
            </button>
          ) : (
            <button className={styles.btn}>
              <Link className={styles.links} to="/">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
