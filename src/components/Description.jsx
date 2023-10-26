import React from 'react';
import styles from '../assets/scss/components/Description.module.scss';

const Description = ({ texts }) => {
  return (
    <div className={styles.description}>
      {texts.map((text, index) => (
        <p key={index} className={styles.paragraph}>
          {text.split('**').map((chunk, i) => {
            if (i % 2 === 1) { // Si c'est un index impair, c'est du texte à surligner
              return <span key={i} className={styles.highlighted}>{chunk}</span>;
            }
            return chunk; // Sinon, c'est du texte normal
          })}
        </p>
      ))}
    </div>
  );
};

Description.defaultProps = {
  texts: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit..."]
};

export default Description;
