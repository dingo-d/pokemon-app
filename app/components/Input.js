import React from 'react';
import styles from '../css/LoginElements.css';

const Input = ({name, label, value, placeholder, type, onClick }) => (
  <div className={styles.field}>
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      id={name}
      value={value}
      onClick={onClick} />
    <label className={styles.label} htmlFor={name}>{label}</label>
  </div>
);

export default Input;
