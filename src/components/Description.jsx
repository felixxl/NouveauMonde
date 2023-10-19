import React from 'react';
import styles from '../assets/scss/components/Description.module.scss';

const Description = () => {
  return (
    <div className={styles.description}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt massa in justo vestibulum
        lacinia. Curabitur ornare non dui nec fermentum. Nullam vitae urna magna. Donec luctus, arcu in accumsan
        auctor, ligula ante dictum lectus, lobortis pellentesque tellus magna a neque.
      </p>
    </div>
  );
};

export default Description;
