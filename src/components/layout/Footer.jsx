import React from 'react';
import styles from '../../assets/scss/components/layout/Footer.module.scss'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-text']}>Copyright © 2023 Un autre monde. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
