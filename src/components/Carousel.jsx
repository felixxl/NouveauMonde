import React, { useState, useEffect } from 'react';
import styles from '../assets/scss/components/Carousel.module.scss'

const Carousel = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change l'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, [items]);

  const goToNextSlide = () => {
    let index = currentIndex + 1 === items.length ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    let index = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselBtns}>
        <button onClick={goToPrevSlide}>&lt;</button>
        <button onClick={goToNextSlide}>&gt;</button>
      </div>

      {items.map((item, index) => (
        <div key={index} className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}>
          <img src={item.image} alt={item.title} />
          <div className={styles.carouselDescription}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
