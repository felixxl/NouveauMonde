import React from 'react';
import styles from '../../assets/scss/components/input/Button.module.scss';

const Button = ({ content, onClick, className, type='button', form = '', beforeContent = null}) => (

  <button
    form={form}
    type={type}
    onClick={onClick}
    className={`${styles.btn} ${className} ${beforeContent && styles.createLinkButton}`}
    data-before-content={beforeContent}
  >
    {content}
  </button>
);

export default Button;
