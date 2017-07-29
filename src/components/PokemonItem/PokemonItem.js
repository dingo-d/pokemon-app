import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

import styles from './PokemonItem.css';

export default class PokemonItem extends Component {
  render () {
    const pokemon = this.props.pokemon;

    return(
      <div className={styles.item}>bla</div>
    );
  }
}
