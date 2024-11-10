import styles from "../module_css/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>Explore</li>
        <li className={styles.nav_item}>Package</li>
        <li className={styles.nav_item}>Custom Booking</li>
        <li className={styles.nav_item}>Contact</li>
      </ul>
    </nav>
  );
}
