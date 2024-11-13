import styles from "../module_css/Form.module.css";
export default function Form() {
  return (
    <div className={styles.formdiv}>
      <form className={styles.form}>
        <h4>Send your Detail for more Info</h4>
        <input type="number" id="mobile" placeholder="Mobile Number" />
        <input type="date" id="date" />
        <input type="time" id="time" />
        <input type="text" id="address" placeholder="Address" />
        <textarea id="remarks" placeholder="Remarks"></textarea>
        <button type="submit" className={styles.btn}>
          Add to planner
        </button>
        <button type="submit" className={styles.btn}>
          Order
        </button>
      </form>
    </div>
  );
}
