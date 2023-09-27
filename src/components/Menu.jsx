import React from 'react';
import Link from 'next/link'; 
import styles from '../assets/scss/components/Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menulist}>
        <li className={styles.menuitem}>
          <Link href="/">Accueil</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/un-autre-monde">Un autre Monde</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/la-caze-a-vince">La Caze à VinCe</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/test">Test</Link>
        </li>
        <li className={styles.menuitem}>
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
