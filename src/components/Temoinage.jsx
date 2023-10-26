import React from 'react';
import styles from "../assets/scss/components/Temoinage.module.scss";


const Temoinage = ({ text, author, position, imageUrl }) => (
  <section className={styles.testimonial}>
    <div className={styles.container}>
      <h1 className={styles.testimonial__title}>Avis</h1>
      <blockquote className={styles.testimonial__quote}>
        <p className={styles.testimonial__text}>{text}</p>
        <footer className={styles.testimonial__meta}>
          <img className={styles.testimonial__img} src={imageUrl} alt="Author" />
          <div>
            <cite className={styles.testimonial__author}>{author}</cite>
            <br />
            <span className={styles.testimonial__position}>{position}</span>
          </div>
        </footer>
      </blockquote>
    </div>
  </section>
);

export default Temoinage;
