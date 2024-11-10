import styles from "../module_css/Filter_service.module.css";

export default function Filter_service() {
  return (
    <>
      <section className={styles.filter_section}>
        <div className={styles.tabs}>
          <button className={styles.tab}>Venues</button>
          <button className={styles.tab}>Decorations</button>
          <button className={styles.tab}>Services</button>
        </div>
        <div className={styles.filters}>
          <div className={styles.range}>
            <label>Min Price</label>
            <input type="range" min="300" max="2800" />
            <label>Max Price</label>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search by event, name, address, etc."
            />
          </div>
          <button className={styles.filter_icon}>
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>
      </section>
      ;
    </>
  );
}
