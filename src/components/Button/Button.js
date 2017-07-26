import React from 'react';
import styles from './Button.css';

const Button = ({name, onClick, className }) => (
  <button type="submit" className={className? styles[className] : styles.button} onClick={onClick}>{name}</button>
);

export default Button;
