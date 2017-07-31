import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

import styles from './PokemonItem.css';

const PokemonItem = ({pokemon}) => {
    const {id, attributes} = pokemon;

    const path = `/pokemon/${id}/`;
    const pokemonImageUrl = `https://pokedex.byinfinum.co/${attributes['image-url']}`;

    return(
      <Link to={path} className={styles.item}>
        <img className={styles.image} src={pokemonImageUrl} alt={attributes.name} />
        <div className={styles.meta}>
          <span className={styles.name}>{attributes.name}</span>
          <span className={styles.likes}></span>
        </div>
        <div className={styles.description}>{attributes.description}</div>
      </Link>
    );
};

export default PokemonItem;