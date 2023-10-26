import React from 'react';
import styles from '../../assets/scss/components/layout/Footer.module.scss'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footertext}>
        Retrouvez-nous sur <a className={styles.footerLien} href="https://www.facebook.com/unautremonde971?locale=fr_FR" target="_blank" rel="noopener noreferrer">Un autre monde</a> et <a className={styles.footerLien} href="https://www.facebook.com/lakazavince971" target="_blank" rel="noopener noreferrer">La kaz à Vince</a> sur Facebook.
      </p>
      <div className={styles.contactContainer}>
        <p className={styles.footertext}>Nous contacter :</p>
        <p className={styles.contactInfo}>06 90 26 11 18</p>
        <p className={styles.footertext}>Mail :</p>
        <p className={styles.contactInfo}>unautremonde971@gmail.com</p>
      </div>
      <p className={styles.footertext}>Copyright © 2023 Un autre monde. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
