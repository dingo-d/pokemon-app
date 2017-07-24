import React from 'react';
import PokemonList from './PokemonList';
import data from '../../data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokemon List:</h1>
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;