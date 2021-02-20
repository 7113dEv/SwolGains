import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import constants from '../../utilities/constants';
import styles from './header.module.css'

const Header = ({ setLoggedOut }) => {
  const history = useHistory();

  const handleLogout = () => {
    setLoggedOut(true);
    sessionStorage.clear()
    history.push(constants.LOGIN_PATH);
  }

  return (
    <div className={styles.header}>
      <NavLink to="/home" ><img className={styles.logo} src={process.env.PUBLIC_URL + "SwolGainsMini.png"} /></NavLink>
      <NavLink to="/general-muscle-gain" className={styles.navbutton}>General Muscle Gain</NavLink>
      <NavLink to="/flexibility" className={styles.navbutton}>Flexibility</NavLink>
      <NavLink to="/aerobic-stamina" className={styles.navbutton}>Aerobic Stamina</NavLink>
      <NavLink to="/higher-energy" className={styles.navbutton}>Higher Energy</NavLink>
      <NavLink to="/targeted-muscle-groups" className={styles.navbutton}>Targeted Muscle Groups</NavLink>
      <div className={styles.logout}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
