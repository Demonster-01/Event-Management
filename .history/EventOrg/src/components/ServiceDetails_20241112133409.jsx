import hallImage from "../assets/images/hall.jpg"; // Default image

import styles from "../module_css/ServiceDetail.module.css";
export default function ServiceDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.serviceInfo}>
          <div className={styles.Image}>
            <img src={hallImage} alt="service" />
          </div>
          <div>
            <div className={styles.details}>
              <h1>Service Details</h1>
              <h3>Title</h3>
              <ul>
                <li>Type</li>
                <li>Price</li>
              </ul>
            </div>
            <div>
              {/* <ul>
              <li>Type</li>
              <li>Price</li>
            </ul> */}
            </div>
            <div className={styles.description}>Description</div>
          </div>
        </div>
      </div>
      <div className={styles.formdiv}>
        <form>
          <input type="numbers" id="mobile" />
          <input type="date" id="date" />
          <input type="time" id="time" />
          <input type="text" id="addres" />
          <input type="textfield" id="remarks" />
          <button type="submit">Add to planner</button>

          <button type="submit">Order</button>
        </form>
      </div>
    </div>
  );
}
