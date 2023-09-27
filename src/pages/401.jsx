import React from "react";
import Error from "../components/layout/Error";
import styles from '../assets/scss/pages/404.module.scss';

export default function error401() {


  return (
    <Error>
      <div className={styles.container}>
        <h1 className={styles.errorCode}>
          <span className={styles.digit}>4</span>
          <span className={styles.digit}>0</span>
          <span className={styles.digit}>1</span>
        </h1>
      <p className={styles.errorMessage}>Page not found</p>
    </div>
    </Error>
  )
}

