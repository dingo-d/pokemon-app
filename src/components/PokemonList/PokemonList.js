import React, {Component} from 'react';
import PokemonItem from '../PokemonItem/PokemonItem';
import styles from './PokemonList.css';

import {getPokemons} from '../../services/api';
import {errorHandler} from '../../services/errorHandler';

class PokemonList extends Component {
  constructor(args) {
    super(args);
    this.state = {
      message: '',
      pokemons: []
    };
  }

  componentWillMount() {
    getPokemons().then((result) => {
      if (typeof result.errors !== 'undefined') {
        this.setState({
          message: errorHandler(result.errors)
        });
        return;
      }
      this.setState({
        pokemons: result.data
      });
    }).catch((error) => {
      const errorMessage = `Error: ${error}`;
      this.setState({
        message: errorMessage
      });
    });
  }

  render() {
    const pokemons = this.state.pokemons;
    return(
      <div className={styles.list}>
        <div id="message" className={styles.message}>{this.state.message}</div>
        {
          pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} key={i} />)
        }
      </div>
    );
  }
}

export default PokemonList;
