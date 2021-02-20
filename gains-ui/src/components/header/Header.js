import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/general-muscle-gain" className={styles.navbutton}>General Muscle Gain</NavLink>
      <NavLink to="/flexibility" className={styles.navbutton}>Flexibility</NavLink>
      <NavLink to="/aerobic-stamina" className={styles.navbutton}>Aerobic Stamina</NavLink>
      <NavLink to="/higher-energy" className={styles.navbutton}>Higher Energy</NavLink>
      <NavLink to="/targeted-muscle-groups" className={styles.navbutton}>Targeted Muscle Groups</NavLink>
    </div>
  );
}

export default Header;
