import React from 'react';
import styles from '../assets/scss/components/input/ImageHoverText.module.scss';

const ImageTextHover = ({ data: { title, contentUrl, content, handleModal, color }}) => {
    return (
        <div className={styles.faq} onClick={handleModal}>
            <img src={contentUrl} alt={`${title} picture`} />
            <div className={`${styles.hover} ${styles[color]}`}></div>
            <div className={styles.blocContent}>
                <h2><span className={styles[color]}>{title}</span></h2>
                <p className={`${styles.paragraph} ${styles[color]}`}>{content}</p>
            </div>
        </div>
    );
}

export default ImageTextHover;
