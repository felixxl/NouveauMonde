import React from 'react';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import CustomContentModule from '../components/input/CustomContentModule';
import Description from '../components/Description';
import Sleep from '../components/Sleep';
import SleepInverse from '../components/SleepInverse';  
import styles from '../assets/scss/pages/acceuilHandicap.module.scss';

const Acceuilhandicape = () => {
  
  const sleepTitle = "Chambre Blache";
  const sleepDescription = "Voici la description de la chambre";
  const sleepImages = [
    "/images/ChambreLit1.jpg",
    "/images/ChambreVue1.jpg",
    "/images/ChambreCouchage1.jpg",
    "/images/ChambreEntrer1.jpg",
    "/images/ChambreDouche1.jpg"
  ];
  const sleepTitle2 = "Chambre Rouge";
  const sleepDescription2 = "Voici la description de la chambre";
  const sleepImages2 = [
    "/images/ChambreLit1.jpg",
    "/images/ChambreVue1.jpg",
    "/images/ChambreCouchage1.jpg",
    "/images/ChambreEntrer1.jpg",
    "/images/ChambreDouche1.jpg"
  ];

  return (
    <div className={styles.background}>
      <Banner 
        title="Accueil&nbsp;Handicap"
        content="Loreum"
      />
      <div className={styles.mainContent}>
        <BackToTopButton />
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
        <div className={styles.blocCommunaute}>
          <Description /> 
        </div>
        <div className={styles.space}>    
          <Sleep title={sleepTitle} description={sleepDescription} images={sleepImages} />
          <div className={styles.space}/>
          <SleepInverse title={sleepTitle2} description={sleepDescription2} images={sleepImages2} />
        </div>
        <div className={styles.blocCommunaute}>
          <Description /> 
        </div> 
      </div>
    </div>
  );
};

export default Acceuilhandicape;
