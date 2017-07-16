import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({pokemons}) => (
  <div className="pokemon-list">
    {
      pokemons.map( (pokemon, i) => <PokemonItem pokemon={pokemon} key={i} /> )
    }
  </div>
);

export default PokemonList;