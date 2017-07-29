import React, {Component} from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';

import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Pokedex</h1>
        <PokemonList />
      </div>
    );
  }
}

export default Home;
