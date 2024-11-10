import styles from "../module_css/Nav.module.css";

export default function Filter_service() {
  return (
    <div className={styles.container}>
      <div>
        <button>Venue</button>
        <button>Decorations</button>
        <button>Services</button>
      </div>
      <div>
        <span>Min Price</span>
        <span>Miax Price</span>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
