import React from 'react';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import styles from '../assets/scss/pages/UnAutreMonde.module.scss';

const laCazeAVinCe = () => {
  return (
    <div className={styles.background}>
      <Banner 
                title="La&nbsp;CaZe&nbsp;à&nbsp;VinCe"
                content="Loreum"
      />
      <div className={styles.mainContent}>
        <BackToTopButton/>
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
      </div>
    </div>
  );
};

export default laCazeAVinCe;