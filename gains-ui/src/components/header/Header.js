import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/" className={styles.navbutton}>General Muscle Gain</NavLink>
      <NavLink to="/" className={styles.navbutton}>Flexibility</NavLink>
      <NavLink to="/" className={styles.navbutton}>Aerobic Stamina</NavLink>
      <NavLink to="/" className={styles.navbutton}>Higher Energy</NavLink>
      <NavLink to="/" className={styles.navbutton}>Targeted Muscle Groups</NavLink>
    </div>
  )
}

export default Header
