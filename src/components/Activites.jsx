import React from 'react';
import Banner from '../components/Banner';
import styles from '../assets/scss/components/Activite.module.scss';

const Activite = ({ nom, prix, organisateur, Matériel, date, description }) => {
  return (
    <div className={styles.background}>
      <Banner 
        title={nom}
      />
      <div className={styles.mainContent}>
        <div className={styles.activiteContainer}>
          <h2 className={styles.activiteTitle}>{nom}</h2>
          <p className={styles.activiteOrganisateur}>Organisé par: {organisateur}</p>
          <p className={styles.activiteDescription}>{description}</p>
          <p className={styles.activiteLieu}>Matériel: {Matériel}</p>
          <p className={styles.activiteDate}>Date: {date}</p>
          <p className={styles.activitePrix}>Prix: {prix}</p>
          <p className={styles.activitePrix}>Lieu : Tarare à Vieux Habitants</p>
          <p className={styles.activitePrix}>Tel : 06 90 26 11 18</p>
          <p className={styles.activitePrix}>Mail : unautremonde971@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Activite;



