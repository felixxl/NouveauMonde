import React from 'react';
import styles from '../../assets/scss/components/layout/Stabilo.module.scss';

const Stabilo = ({ children, color = '' }) => {
    return (
        <><span>&nbsp;</span>
            <span className={`${styles.stabilo} ${styles[color]}`}>{children}</span>
            <span>&nbsp;</span>
        </>
    );
}
  
export default Stabilo;