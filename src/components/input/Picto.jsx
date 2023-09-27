import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../assets/scss/components/input/Picto.module.scss'

const Picto = ({icon, color, backgroundColor, size, thumbSize, onClick = null}) => {

  return (
    <span className={`${styles.background} ${size} ${onClick ? styles.pointer : null}`} style={{backgroundColor}} onClick={onClick}>
      <FontAwesomeIcon className={thumbSize} icon={icon} style={{color}}/>
    </span>
  )
}

export default Picto;
