import React, { useEffect, useState, useRef } from "react";
import styles from "../module_css/Ourwork.module.css";

export default function Ourwork() {
  const [ourWork, setOurWork] = useState([]);
  const [leftImageIndex, setLeftImageIndex] = useState(null);
  const [rightImageIndex, setRightImageIndex] = useState(null);
  const [midImageIndex, setMidImageIndex] = useState(null);

  // References for interval IDs
  const leftIntervalRef = useRef(null);
  const midIntervalRef = useRef(null);
  const rightIntervalRef = useRef(null);

  // Function to get a random index for the images
  const getRandomIndex = () => Math.floor(Math.random() * ourWork.length);

  useEffect(() => {
    fetch("http://localhost:8000/api/our-work/")
      .then((response) => response.json())
      .then((data) => setOurWork(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (ourWork.length === 0) return;

    // Initialize the images with random indexes
    setLeftImageIndex(getRandomIndex());
    setRightImageIndex(getRandomIndex());
    setMidImageIndex(getRandomIndex());

    // Set up intervals only once to avoid resetting unnecessarily
    leftIntervalRef.current = setInterval(() => {
      const newLeftIndex = getRandomIndex();
      setLeftImageIndex(newLeftIndex);
    }, 3000); // Left image and background change every 3 seconds

    midIntervalRef.current = setInterval(() => {
      const newMidIndex = getRandomIndex();
      setMidImageIndex(newMidIndex);
    }, 6000);

    rightIntervalRef.current = setInterval(() => {
      setRightImageIndex(getRandomIndex());
    }, 4000);

    return () => {
      // Clean up intervals on component unmount
      clearInterval(leftIntervalRef.current);
      clearInterval(midIntervalRef.current);
      clearInterval(rightIntervalRef.current);
    };
  }, [ourWork]);

  if (ourWork.length === 0) {
    return <p>Loading images...</p>;
  }

  // Ensure the images are not undefined before accessing their properties
  const leftImage = ourWork[leftImageIndex];
  const rightImage = ourWork[rightImageIndex];
  const midImage = ourWork[midImageIndex];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Work Gallery</h1>
      <div className={styles.section}>
        <div>
          {/* Left Image */}
          {leftImage && (
            <div className={styles.images}>
              <img
                src={`http://localhost:8000${leftImage.poster}`}
                alt={leftImage.Name}
                className={styles.img}
              />
            </div>
          )}
        </div>
        <div>
          {/* Mid Image */}
          {midImage && (
            <div className={styles.images}>
              <img
                src={`http://localhost:8000${midImage.poster}`}
                alt={midImage.Name}
                className={styles.img}
              />
            </div>
          )}
        </div>
        <div>
          {/* Right Image */}
          {rightImage && (
            <div className={styles.images}>
              <img
                src={`http://localhost:8000${rightImage.poster}`}
                alt={rightImage.Name}
                className={styles.img}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
