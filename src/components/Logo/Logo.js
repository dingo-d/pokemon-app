import React from 'react';

import styles from './Logo.css';

import loginImage from './images/pokemon-logo.png';
import loginImageRetina from './images/pokemon-logo@2x.png';

const Logo = () => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.loginImage} src={loginImage} srcSet={`${loginImageRetina} 2x`} />
    </div>
  );
}

export default Logo;