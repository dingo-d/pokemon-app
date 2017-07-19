import React from 'react';
import styles from '../css/LoginElements.css';

const Button = ({name, onClick, className }) => (
  <div className={className? styles[className] : styles.button} onClick={onClick}>{name}</div>
);

export default Button;
