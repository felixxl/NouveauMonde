import React from 'react';
import styles from "../assets/scss/components/Banner.module.scss"

const Banner = ({ content, onClick, className, type='button', form = '', beforeContent = null}) => (

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

export default Banner;
