/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types';
import styles from './DropDownSummary.module.css';

export const DropDownSummary = ({ subject, viewSummary, setViewSummary }) => {
  const showClass = viewSummary ? styles.showContent : styles.hideContent;
  return (
    <div className={showClass}>
      {subject}
    </div>
  );
};

DropDownSummary.PropTypes = {
  subject: PropTypes.string.isRequired,
  viewSummary: PropTypes.bool.isRequired,
  setViewSummary: PropTypes.func.isRequired
};

export default DropDownSummary;
