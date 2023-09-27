import React from 'react';
import styles from '../../assets/scss/components/layout/DualColumns.module.scss';

const DualColumns = ({ contentLeft, contentRight, light }) => {
  return (
    <section className={!light ? styles.columns : `${styles.columns} ${styles.white}`}>
      <div className={`${styles.blocs} container`}>
        <div className={styles.left}>
          {contentLeft}
        </div>
        <div className={styles.right}>
          {contentRight}
        </div>
      </div>
    </section>
  );
}

export default DualColumns;