import styles from "../module_css/Nav.module.css";

export default function Filter_service() {
  return (
    <div>
      <div>
        <button>Venue</button>
        <button>Decorations</button>
        <button>Services</button>
      </div>
      <span>Min Price</span>
      <span>Miax Price</span>
      <input type="text" placeholder="Search" />
    </div>
  );
}
