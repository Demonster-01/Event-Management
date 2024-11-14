import styles from "../module_css/Form.module.css";
export default function Form() {
  return (
    <div className={styles.formdiv}>
      <form className={styles.form}>
        <h4>Send your Detail for more Info</h4>
        <input
          type="number"
          id="mobile"
          placeholder="Mobile Number"
          className={styles.inputs}
        />
        <input type="date" id="date" className={styles.inputs} />
        <input type="time" id="time" className={styles.inputs} />
        <input
          type="text"
          id="address"
          placeholder="Address"
          className={styles.inputs}
        />
        <textarea
          id="remarks"
          placeholder="Remarks"
          className={styles.inputs}
        ></textarea>
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
