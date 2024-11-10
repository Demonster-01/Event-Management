import styles from "../module_css/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav - list}>
        <li className={styles.nav - item}>Explore</li>
        <li className={styles.nav - item}>Package</li>
        <li className={styles.nav - item}>Custom Booking</li>
        <li className={styles.nav - item}>Contact</li>
      </ul>
    </nav>
  );
}
