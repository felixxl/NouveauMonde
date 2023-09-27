import React from "react";
import styles from "../assets/scss/components/Loading.module.scss"

const Loading = ({ global= false, modal= false, small = false, theme=false }) => {

  

  return (
    <div className={modal ? styles.loadingModal : global ? styles.loadingGlobal : small ? styles.loadingSmall : styles.loading}>
      {!theme &&<h1>Chargement</h1>}
      <div>
        <div className={`${styles.point1} ${styles.point}`}></div>
        <div className={`${styles.point2} ${styles.point}`}></div>
        <div className={`${styles.point3} ${styles.point}`}></div>
      </div>
    </div>
  )
}

export default Loading;