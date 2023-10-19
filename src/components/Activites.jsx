import React from 'react';
import styles from '../assets/scss/components/Activite.module.scss';

const Activite = ({ nom, prix, organisateur, lieu, date, description }) => {
  return (
    <div className={styles.background}>
      <div className={styles.mainContent}>
        <div className={styles.activiteContainer}>
          <h2 className={styles.activiteTitle}>{nom}</h2>
          <p className={styles.activitePrix}>Prix: {prix}€</p>
          <p className={styles.activiteOrganisateur}>Organisé par: {organisateur}</p>
          <p className={styles.activiteLieu}>Lieu: {lieu}</p>
          <p className={styles.activiteDate}>Date: {date}</p>
          <p className={styles.activiteDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Activite;



