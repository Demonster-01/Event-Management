import styles from "../module_css/Nav.module.css";

export default function Filter_service() {
  return (
    <>
      <section className={styles.filter_section}>
        <div className="tabs">
          <button className="tab active">Venues</button>
          <button className="tab">Decorations</button>
          <button className="tab">Services</button>
        </div>
        <div className="filters">
          <div className="price-range">
            <label>Min Price</label>
            <input type="range" min="300" max="2800" />
            <label>Max Price</label>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search by event, name, address, etc."
            />
          </div>
          <button className="filter-icon">
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>
      </section>
      ;
    </>
  );
}
