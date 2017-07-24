import React from 'react';
import PokemonItem from './PokemonItem';
import styles from '../css/PokemonList.css';

const PokemonList = ({pokemons}) => (
  <div className={styles.list}>
    {
      pokemons.map( (pokemon, i) => <PokemonItem pokemon={pokemon} key={i} /> )
    }
  </div>
);

export default PokemonList;