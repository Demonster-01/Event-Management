import styles from "../module_css/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
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
          <button className={styles.btn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
