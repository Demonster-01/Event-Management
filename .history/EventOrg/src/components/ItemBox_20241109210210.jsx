import styles from "../module_css/Nav.module.css";

import hallImage from "../assets/images/hall.jpg";
export default function ItemBox() {
  return (
    <div>
      <div>
        <img src={hallImage} alt="venue 1" />
      </div>
      <div>Ktm Party Venue </div>
      <div> Description </div>
    </div>
  );
}
