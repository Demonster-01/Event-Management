import styles from "../module_css/Footer.module.css";
export default function footer() {
  return (
    <div>
      <hr />
      <div className={styles.footer}>
        <div className={styles.head}>Event Milauney</div>
        <div className={styles.social}>
          <h3>Our Socials</h3>
          <span>Facebook</span>
          <spa>Instagram</spa>
          <span>X</span>
          <span>Tiktok</span>
        </div>
        <div className={styles.contact}>
          <h3>Contatct</h3>
          <span>+977-98xxxxxxxx</span>
          <span>+977-98xxxxxxxx</span>
          <span>Email:Event@gmail.com</span>
        </div>
      </div>
      <hr />
      <span className={styles.foot}>Created for Learnign purpose @sureh</span>
    </div>
  );
}
