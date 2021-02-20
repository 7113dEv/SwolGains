import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.navbutton}>General Muscle Gain</NavLink>
      <NavLink className={styles.navbutton}>Flexibility</NavLink>
      <NavLink className={styles.navbutton}>Aerobic Stamina</NavLink>
      <NavLink className={styles.navbutton}>Higher Energy</NavLink>
      <NavLink className={styles.navbutton}>Targeted Muscle Groups</NavLink>
    </div>
  )
}

export default Header
