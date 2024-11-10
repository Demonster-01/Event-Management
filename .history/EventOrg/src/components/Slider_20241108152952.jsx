import React, { useState, useEffect } from "react";
import "./EventPlanner.css"; // Create a separate CSS file for styling

export default function EventPlanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image URLs and captions
  const images = [
    { url: "./assets/images/image1.jpg", caption: "Image 1" },
    { url: "./assets/images/image2.jpg", caption: "Image 2" },
    { url: "./assets/images/image3.jpg", caption: "Image 3" },
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
    <div className="slider-container">
      <div className="image-slider">
        <img
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].caption}
          className="slider-image"
        />
        <div className="image-caption">{images[currentImageIndex].caption}</div>
      </div>
    </div>
  );
}
