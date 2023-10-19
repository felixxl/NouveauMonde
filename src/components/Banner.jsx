import React from 'react';
import styles from "../assets/scss/components/Banner.module.scss";

const Banner = ({ title, content}) => {
  return (
    <div
      className={styles.banner}
    >
      <div className={styles.contentBloc}>
        <h1>
          {title.split('').map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </h1>
        {content && <p>{content}</p>}
      </div>
    </div>
  );
}

export default Banner;
