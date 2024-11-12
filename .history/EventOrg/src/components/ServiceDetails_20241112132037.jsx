import hallImage from "../assets/images/hall.jpg"; // Default image

import styles from "../module_css/ServiceDetail.module.css";
export default function ServiceDetails() {
  return (
    <div>
      <div>
        <div>
          <img src={hallImage} alt="service" />
        </div>
        <div>
          <div>
            <h1>Service Details</h1>
            <h3>Title</h3>
          </div>
          <div>
            <ul>
              <li>Type</li>
              <li>Price</li>
            </ul>
          </div>
          <div>Description</div>
        </div>
      </div>
      <div>
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
