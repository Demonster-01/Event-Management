import styles from "../module_css/ItemBox.module.css";

import hallImage from "../assets/images/hall.jpg";
export default function ItemBox() {
  return (
    <div className={styles.container}>
      <div className={styles.itembox}>
        <div className={styles.imageContainer}>
          <img src={hallImage} alt="venue 1" className={styles.image} />
        </div>
        <div className={styles.title}>Ktm Party Venue </div>
        <div className={styles.description}> Description </div>
      </div>
    </div>
  );
}
