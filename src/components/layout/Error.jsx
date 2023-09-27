import React from 'react';
import styles from '../../assets/scss/components/layout/Error.module.scss';

const Error = ({children}) => {
  return (
    <section className={styles.error}>
      {children}
    </section>
  );
}

export default Error;
