import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../assets/scss/components/layout/Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" className={styles.logoImage} />
        </a>

        <button className={styles.menuBurger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`${styles.menulist} ${isOpen ? styles.open : ''}`}>
          <li className={styles.menuitem}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/unAutreMonde">Un Autre Monde</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/laCazeAVinCe">La Caze à VinCe</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/acceuilHandicap">Accueil Handicap</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="https://sheherasade.fr/" target="_blank" rel="noopener noreferrer">Shehérasade</Link>
          </li>
          {/* <li className={styles.menuitem}>
            <Link href="/admin">Admin</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
