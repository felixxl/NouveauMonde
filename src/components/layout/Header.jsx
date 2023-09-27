import React from 'react';
import Menu from '../Menu';
// import LogoImage from '../../assets/images/logo.png'; 
import styles from '../../assets/scss/components/layout/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.autre}>
        <a href="/" className={styles.logo}>
          <img src={'LogoImage'} alt="Logo" className={styles.logoImage} />
        </a>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
