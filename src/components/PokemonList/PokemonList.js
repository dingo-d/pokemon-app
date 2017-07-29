import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import styles from './PokemonList.css';

const PokemonList = ({pokemons}) => (
  <div className={styles.list}>
    {
      pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} key={i} />)
    }
  </div>
);

export default PokemonList;
