import styles from "../module_css/ItemBox.module.css";

import hallImage from "../assets/images/hall.jpg";
export default function ItemBox() {
  return (
    <div>
      <div className={styles.}>
        <img src={hallImage} alt="venue 1" />
      </div>
      <div className={styles.}>Ktm Party Venue </div>
      <div className={styles.}> Description </div>
    </div>
  );
}
