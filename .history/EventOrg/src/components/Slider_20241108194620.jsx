import React, { useState, useEffect } from "react";
import styles from "../module_css/Slider.module.css";

import image1 from "../assets/images/image.jpg";
import hallImage from "../assets/images/hall.jpg";
import image3 from "../assets/images/image.jpg";

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: image3,
      caption: (
        <>
          <p>Get your Custom Booking</p>
          <button className={styles.button} onClick={() => alert("Booking...")}>
            Book
          </button>
        </>
      ),
    },
    { url: hallImage, caption: "Book Your Event" },
    {
      url: image3,
      caption: (
        <>
          <p>Book Here</p>
          <button className={styles.button} onClick={() => alert("Booking...")}>
            Book
          </button>
        </>
      ),
    },
  ];

  // Function to handle the next image in the slider
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatic slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className={styles.slider_container}>
      <div className={styles.image_slider}>
        <img
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].caption}
          className={styles.slider_image}
        />
        <div className={styles.image_caption}>
          {images[currentImageIndex].caption}
        </div>
      </div>
    </div>
  );
}