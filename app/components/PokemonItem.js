import React from 'react';

const PokemonItem = ({pokemon: {data: {attributes} } }) => (
  <div className="pokemon-list__pokemon-single">
    <h2 className="pokemon-list__pokemon-single--pokemon-name">Moje ime je: {attributes.name}</h2>
    <h3 className="pokemon-list__pokemon-single--pokemon-description">{attributes.description}</h3>
    <div className="pokemon-list__pokemon-single--pokemon-stats">
      <h4>Moji statsi su:</h4>
      <div className="left-part">
        <span className="item">Visina</span>
        <span className="item">Težina</span>
        <span className="item">Osnovno iskustvo</span>
      </div>
      <div className="right-part">
        <span className="item">{attributes.height}</span>
        <span className="item">{attributes.weight}</span>
        <span className="item">{attributes.base_experience}</span>
      </div>
    </div>
  </div>
);

export default PokemonItem;
