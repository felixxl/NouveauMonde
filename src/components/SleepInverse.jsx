import React from 'react';
import styles from "../assets/scss/components/Sleep.module.scss";
import SleepCarousel from './SleepCarousel';

const Sleep = ({ title, description, images }) => {
  return (
    <div className={styles.sleepContainer}>
      <div className={styles.sleepImageWrapper}>
        <SleepCarousel images={images} />
      </div>
      <div className={styles.sleepTextWrapper}>
        <h2 className={styles.sleepTitle}>{title}</h2>
        <p className={styles.sleepDesc}>{description}</p>
      </div>
    </div>
  );
};

export default Sleep;
