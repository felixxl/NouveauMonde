import React from 'react';
import styles from '../../assets/scss/components/layout/Footer.module.scss'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footertext}>
        Retrouvez-nous sur <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>.
      </p>
      <p className={styles.footertext}>Copyright © 2023 Un autre monde. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
