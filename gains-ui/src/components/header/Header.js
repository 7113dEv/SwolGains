import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import constants from '../../utilities/constants';
import DropDownSummary from '../DropDownSummary/DropDownSummary';
import styles from './header.module.css'

const Header = ({ setLoggedOut }) => {
  const history = useHistory();
  const [subject, setSubject] = useState('');
  const [viewSummary, setViewSummary] = useState(false);

  const handleLogout = () => {
    setLoggedOut(true);
    sessionStorage.clear()
    history.push(constants.LOGIN_PATH);
  }

  const handleMouseHover = (e) => {
    const subject = e.target.innerText;
    setSubject(subject);
    setViewSummary(true);
  }

  const handleMouseLeave = () => {
    setSubject('');
    setViewSummary(false);
  }

  return (
    <>
    <div className={styles.header}>
      <NavLink to="/home"><img className={styles.logo} src={process.env.PUBLIC_URL + "SwolGainsMini.png"} alt="Swol Gains" /></NavLink>
      <NavLink to="/general-muscle-gain" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} setViewSummary={setViewSummary} className={styles.navbutton}>Strength Training</NavLink>
      <NavLink to="/flexibility" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} setViewSummary={setViewSummary} className={styles.navbutton}>Flexibility and Balance</NavLink>
      <NavLink to="/aerobic-stamina" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} setViewSummary={setViewSummary} className={styles.navbutton}>Athletic Conditioning</NavLink>
      <NavLink to="/higher-energy" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} setViewSummary={setViewSummary} className={styles.navbutton}>Functional Excercises</NavLink>
      <NavLink to="/generate" className={styles.navbutton}>Generate Program</NavLink>
      <div className={styles.logout}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    <div className={styles.ddmSummary}>
      <DropDownSummary subject={subject} viewSummary={viewSummary} />
    </div>
    </>
  );
}

export default Header;
