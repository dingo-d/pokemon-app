import React from 'react';
import styles from '../css/PokemonItem.css';

const PokemonItem = ({pokemon: {data: {attributes} } }) => (
  <div className={styles.item}>
    <h2 className={styles.name}>Moje ime je: {attributes.name}</h2>
    <h3 className={styles.description}>{attributes.description}</h3>
    <div className={styles.stats}>
      <h4>Moji statsi su:</h4>
      <div className={styles.left}>
        <span className={styles.subitem}>Visina</span>
        <span className={styles.subitem}>Težina</span>
        <span className={styles.subitem}>Osnovno iskustvo</span>
      </div>
      <div className={styles.right}>
        <span className={styles.subitem}>{attributes.height}</span>
        <span className={styles.subitem}>{attributes.weight}</span>
        <span className={styles.subitem}>{attributes.base_experience}</span>
      </div>
    </div>
  </div>
);

export default PokemonItem;
