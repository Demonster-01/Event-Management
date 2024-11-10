import styles from "../module_css/Filter_service.module.css";

export default function Filter_service() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button>Venue</button>
        <button>Decorations</button>
        <button>Services</button>
      </div>
      <div className={styles.filters}>
        <span>Min Price</span>
        <span>Miax Price</span>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
