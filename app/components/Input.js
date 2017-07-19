import React from 'react';
import styles from '../css/LoginElements.css';

const Input = ({name, label, value, placeholder, type, onClick, handleChange }) => (
  <div className={styles.field}>
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      id={name}
      value={value}
      onChange={handleChange}
      onClick={onClick} />
    <label className={styles.label} htmlFor={name}>{label}</label>
  </div>
);

export default Input;
