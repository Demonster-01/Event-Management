import hallImage from "../assets/images/hall.jpg"; // Default image

export default function ServiceDetails() {
  return (
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
  );
}
