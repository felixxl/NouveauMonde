import React, { useState, useEffect } from 'react';
import styles from '../../assets/scss/components/input/BackToTopButton.module.scss';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };    

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.container}>
      {isVisible && (
        <button className={styles.scrollToTopBtn} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
