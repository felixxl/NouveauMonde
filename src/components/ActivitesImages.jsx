import React from 'react';
import Banner from '../components/Banner';
import styles from '../assets/scss/components/ActiviteImage.module.scss';

const ActiviteImage = ({ nom, background }) => {
  return (
    <div className={styles.background}>
      <Banner title={nom} />
      <div className={styles.mainContent}>
        <div className={styles.activiteContainer}>
          <div className={styles.activiteImageWrapper}>
            <img className={styles.activiteImage} src={background} alt={nom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiviteImage;
