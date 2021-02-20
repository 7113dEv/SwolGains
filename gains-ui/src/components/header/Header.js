import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.navbutton}>General Muscle Gain</a>
      <a className={styles.navbutton}>Flexibility</a>
      <a className={styles.navbutton}>Aerobic Stamina</a>
      <a className={styles.navbutton}>Higher Energy</a>
      <a className={styles.navbutton}>Targeted Muscle Groups</a>
    </div>
  )
}

export default Header
