import { useParams } from "react-router-dom";
import styles from "../module_css/ServiceDetail.module.css";
import Form from "./Form";
import ServiceComponent from "./ServiceComponent";

export default function ServiceDetails() {
  const { id } = useParams(); // Get the service ID from the URL

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.servicediv}>
          <ServiceComponent id={id} />
        </div>
        <div className={styles.formdiv}>
          <Form />
        </div>
      </div>
    </div>
  );
}
