import React, { useState, useEffect } from "react";
import styles from "../assets/scss/components/SleepCarousel.module.scss";

const SleepCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.sleepCarousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Sleep first ${index}`}
          className={`${styles.sleepCarouselImage} ${index === currentImage ? styles.active : ""}`}
        />
      ))}
    </div>
  );
};

export default SleepCarousel;
