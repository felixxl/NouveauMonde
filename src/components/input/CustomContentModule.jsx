import React from 'react';
import styles from '../../assets/scss/components/CustomContentModule.module.scss';

const CustomContentModule = ({ title, content, url, url2x, className = '' }) => {
  const srcSet = url2x ? `${url2x} 2x` : `${url} 2x`;

  return (
    <div className={`${styles.blocContent} ${className}`}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {url && (
        <img 
          src={url} 
          srcSet={srcSet}
          alt={title} 
        />
      )}
    </div>
  );
}

export default CustomContentModule;
