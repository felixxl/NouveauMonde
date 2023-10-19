import React from 'react';
import styles from '../../assets/scss/components/CustomContentModule.module.scss';

const CustomContentModule = ({title, content, url, url2x, className = ''}) => {
  return (
    <div className={`${styles.blocContent} ${className}`}>
        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        <img src={url} srcSet={`${url2x} 2x`} alt={title}/>
    </div>
  );
}

export default CustomContentModule;
