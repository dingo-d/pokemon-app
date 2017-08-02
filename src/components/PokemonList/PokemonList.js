import React, {Component} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import PokemonItem from '../PokemonItem/PokemonItem';
import styles from './PokemonList.css';

import {getPokemons} from '../../services/api';
import {errorHandler} from '../../services/errorHandler';
import store from '../../state/store';

@observer
class PokemonList extends Component {
  componentWillMount() {
    if ( ! store.storeState.pokemons.length ) {
      getPokemons().then((result) => {
        if (typeof result.errors !== 'undefined') {
          store.storeState.pokemonListMessage = errorHandler(result.errors);
          return;
        }
        store.storeState.pokemons = result.data;
      }).catch((error) => {
        const errorMessage = `Error: ${error}`;
        store.storeState.pokemonListMessage = errorMessage;
      });
    }
  }

  render() {
    const pokemons = store.storeState.pokemons;
    return (
      <div className={styles.list}>
        {
          pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} key={i} />)
        }
        <div id="message" className={styles.message}>{store.storeState.pokemonListMessage}</div>
      </div>
    );
  }
}

export default PokemonList;
